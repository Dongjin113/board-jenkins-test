package com.some.where.camping.controller;

import com.some.where.camping.dto.response.CampingRegionCountsResponse;
import com.some.where.camping.dto.response.CampingPreViewResponse;
import com.some.where.camping.service.CampingService;
import com.some.where.common.ControllerTest;
import com.some.where.domain.camping.Camping;
import com.some.where.domain.camping.CampingCategory;
import com.some.where.domain.embedded.Address;
import com.some.where.domain.embedded.Location;
import com.some.where.domain.enums.CampingCategoryMenu;
import com.some.where.domain.enums.Region;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@Transactional
class CampingControllerTest extends ControllerTest {

    @MockBean
    private CampingService campingService;

    @MockBean
    private CampingCategory campingCategory;

    private final String region = "서울";

    @Test
    @DisplayName("지역이름으로 지역 캠핑장 조회하기")
    void campingPreViewList() throws Exception {
        List<CampingCategory> campingCategories = Arrays.asList(
                CampingCategory.builder().category(CampingCategoryMenu.일반야영장).build(),
                CampingCategory.builder().category(CampingCategoryMenu.글램핑).build(),
                CampingCategory.builder().category(CampingCategoryMenu.카라반).build()
        );

        List<CampingPreViewResponse> campingList = IntStream.range(0, 3).mapToObj(
                index -> CampingPreViewResponse.of(
                        new Camping("서울캠핑장" + index,
                                new Location(13.12, 12.12),
                                new Address(Region.서울특별시, "강서구", 1235, "도로명", "주소"),
                                "홈페이지 URL", "사유지",
                                "12-123-1234", "서브소개", "소개"
                        ), campingCategories)).toList();
        when(campingService.campingPreViewList(region)).thenReturn(campingList);

        mockMvc.perform(get("/api/camping/{region}", region)
                        .contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.status.code").value("200"))
                .andExpect(jsonPath("$.status.message").value("OK"))
                .andExpect(jsonPath("$.data[0].placeName").value("서울캠핑장0"))
                .andExpect(jsonPath("$.data[0].location.lat").value(13.12))
                .andExpect(jsonPath("$.data[0].location.lng").value(12.12))
                .andExpect(jsonPath("$.data[0].address.region").value("서울"))
                .andExpect(jsonPath("$.data[0].address.city").value("강서구"))
                .andExpect(jsonPath("$.data[0].address.postNum").value(1235))
                .andExpect(jsonPath("$.data[0].address.roadAddress").value("도로명"))
                .andExpect(jsonPath("$.data[0].address.address").value("주소"))
                .andExpect(jsonPath("$.data[0].homePage").value("홈페이지 URL"))
                .andExpect(jsonPath("$.data[0].phoneNum").value("12-123-1234"))
                .andExpect(jsonPath("$.data[0].subIntro").value("서브소개"))
                .andDo(document("camping-preview",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("region").description("캠핑장 정보를 볼 지역을 요청합니다")
                        ),
                        responseFields(
                                fieldWithPath("status.code").description("상태 코드"),
                                fieldWithPath("status.message").description("상태 메시지"),
                                fieldWithPath("data[0].campingId").description("캠핑장 id값"),
                                fieldWithPath("data[0].placeName").description("캠핑장 이름"),
                                fieldWithPath("data[0].location.lat").description("위도"),
                                fieldWithPath("data[0].location.lng").description("경도"),
                                fieldWithPath("data[0].address.region").description("지역"),
                                fieldWithPath("data[0].address.city").description("군,구"),
                                fieldWithPath("data[0].address.postNum").description("우편 번호"),
                                fieldWithPath("data[0].address.roadAddress").description("도로명 주소"),
                                fieldWithPath("data[0].address.address").description("지번 주소"),
                                fieldWithPath("data[0].homePage").description("캠핑장 홈페이지"),
                                fieldWithPath("data[0].phoneNum").description("캠핑장 번호"),
                                fieldWithPath("data[0].subIntro").description("캠핑장 간단 소개"),
                                fieldWithPath("data[0].categories").description("캠핑장 카테고리")
                        )));
    }

    @Test
    @DisplayName("지역별 캠핑장 수 검색")
    void campingRegionCounts() throws Exception {

        List<CampingRegionCountsResponse> campingRegionCountResponses = Arrays.asList(
                CampingRegionCountsResponse.builder()
                        .region(Region.서울특별시)
                        .campingCounts(8L)
                        .build(),
                CampingRegionCountsResponse.builder()
                        .region(Region.강원도)
                        .campingCounts(40L)
                        .build(),
                CampingRegionCountsResponse.builder()
                        .region(Region.경기도)
                        .campingCounts(500L)
                        .build()
        );

        when(campingService.campingCountsByRegion()).thenReturn(campingRegionCountResponses);

        mockMvc.perform(get("/api/camping/region/counts")
                        .contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.status.code").value("200"))
                .andExpect(jsonPath("$.status.message").value("OK"))
                .andExpect(jsonPath("$.data[0].region").value("서울"))
                .andExpect(jsonPath("$.data[0].campingCounts").value(8))
                .andExpect(jsonPath("$.data[0].lat").value(37.567310715770816))
                .andExpect(jsonPath("$.data[0].lng").value(126.97851629041665))
                .andDo(document("camping-region-counts",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(),
                        responseFields(
                                fieldWithPath("status.code").description("상태 코드"),
                                fieldWithPath("status.message").description("상태 메시지"),
                                fieldWithPath("data[0].region").description("지역"),
                                fieldWithPath("data[0].campingCounts").description("지역의 캠핑장 수"),
                                fieldWithPath("data[0].lat").description("위도"),
                                fieldWithPath("data[0].lng").description("경도")
                        )));
    }

    @Test
    @DisplayName("일정 위도 경도 범위내의 캠핑장 정보 받아오기")
    void findCampingByLocation() throws Exception {

        List<CampingCategory> campingCategories = Arrays.asList(
                CampingCategory.builder().category(CampingCategoryMenu.일반야영장).build(),
                CampingCategory.builder().category(CampingCategoryMenu.글램핑).build(),
                CampingCategory.builder().category(CampingCategoryMenu.카라반).build()
        );

        List<CampingPreViewResponse> campingList = IntStream.range(0, 3).mapToObj(
                index -> CampingPreViewResponse.of(
                        new Camping("서울캠핑장" + index,
                                new Location(13.12, 12.12),
                                new Address(Region.서울특별시, "강서구", 1235, "도로명", "주소"),
                                "홈페이지 URL", "사유지",
                                "12-123-1234", "서브소개", "소개"
                        ), campingCategories)).toList();

        when(campingService.findCampingByLocation(any())).thenReturn(campingList);

        mockMvc.perform(get("/api/camping/location?northLng=200&southLng=0&eastLat=200&westLat=0")
                        .contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.status.code").value("200"))
                .andExpect(jsonPath("$.status.message").value("OK"))
                .andExpect(jsonPath("$.data[0].placeName").value("서울캠핑장0"))
                .andExpect(jsonPath("$.data[0].location.lat").value(13.12))
                .andExpect(jsonPath("$.data[0].location.lng").value(12.12))
                .andExpect(jsonPath("$.data[0].address.region").value("서울"))
                .andExpect(jsonPath("$.data[0].address.city").value("강서구"))
                .andExpect(jsonPath("$.data[0].address.postNum").value(1235))
                .andExpect(jsonPath("$.data[0].address.roadAddress").value("도로명"))
                .andExpect(jsonPath("$.data[0].address.address").value("주소"))
                .andExpect(jsonPath("$.data[0].homePage").value("홈페이지 URL"))
                .andExpect(jsonPath("$.data[0].phoneNum").value("12-123-1234"))
                .andExpect(jsonPath("$.data[0].subIntro").value("서브소개"))
                .andDo(
                        document("camping-location-preview",
                                preprocessRequest(prettyPrint()),
                                preprocessResponse(prettyPrint()),
                                queryParameters(
                                        parameterWithName("northLng").description("북쪽 경도"),
                                        parameterWithName("southLng").description("남쪽 경도"),
                                        parameterWithName("eastLat").description("동쪽 위도"),
                                        parameterWithName("westLat").description("서쪽 위도")
                                ),
                                responseFields(
                                        fieldWithPath("status.code").description("상태 코드"),
                                        fieldWithPath("status.message").description("상태 메시지"),
                                        fieldWithPath("data[0].campingId").description("캠핑장 id값"),
                                        fieldWithPath("data[0].placeName").description("캠핑장 이름"),
                                        fieldWithPath("data[0].location.lat").description("위도"),
                                        fieldWithPath("data[0].location.lng").description("경도"),
                                        fieldWithPath("data[0].address.region").description("지역"),
                                        fieldWithPath("data[0].address.city").description("군,구"),
                                        fieldWithPath("data[0].address.postNum").description("우편 번호"),
                                        fieldWithPath("data[0].address.roadAddress").description("도로명 주소"),
                                        fieldWithPath("data[0].address.address").description("지번 주소"),
                                        fieldWithPath("data[0].homePage").description("캠핑장 홈페이지"),
                                        fieldWithPath("data[0].phoneNum").description("캠핑장 번호"),
                                        fieldWithPath("data[0].subIntro").description("캠핑장 간단 소개"),
                                        fieldWithPath("data[0].categories").description("캠핑장 카테고리")
                                ))
                );
    }
}