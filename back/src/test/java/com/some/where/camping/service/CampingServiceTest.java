package com.some.where.camping.service;

import com.some.where.camping.dto.request.LocationRequest;
import com.some.where.camping.dto.response.CampingRegionCountsResponse;
import com.some.where.camping.dto.response.CampingPreViewResponse;
import com.some.where.camping.repository.CampingCategoryRepository;
import com.some.where.camping.repository.CampingRepository;
import com.some.where.domain.camping.Camping;
import com.some.where.domain.camping.CampingCategory;
import com.some.where.domain.embedded.Address;
import com.some.where.domain.embedded.Location;
import com.some.where.domain.enums.CampingCategoryMenu;
import com.some.where.domain.enums.Region;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.assertThat;

@Slf4j
@SpringBootTest
@Transactional
class CampingServiceTest {

    @Autowired
    private CampingRepository campingRepository;

    @Autowired
    private CampingCategoryRepository campingCategoryRepository;

    @Autowired
    private CampingService campingService;
    private final String region = "서울";

    @BeforeEach
    void beforeTest() {
        List<Camping> campingList = IntStream.range(0, 10).mapToObj(
                index -> new Camping("서울캠핑장" + index,
                        new Location(13.12, 12.12),
                        new Address(Region.서울특별시, "강서구", 1235, "도로명", "주소"),
                        "홈페이지 URL", "사유지",
                        "12-123-1234", "서브소개", "소개"
                )).toList();
        campingRepository.saveAll(campingList);

        List<CampingCategory> categories = new ArrayList<>();
        categories.add(new CampingCategory(campingList.get(0), CampingCategoryMenu.일반야영장));
        categories.add(new CampingCategory(campingList.get(0), CampingCategoryMenu.글램핑));
        categories.add(new CampingCategory(campingList.get(0), CampingCategoryMenu.카라반));
        campingCategoryRepository.saveAll(categories);
    }

    @Test
    @DisplayName("캠핑장 데이터 지역으로 조회하기")
    void campingPreviewList() {
        //when
        List<CampingPreViewResponse> result = campingService.campingPreViewList(region);

        //then
        assertThat(result.size()).isEqualTo(10);
        assertThat(result.get(0).getPlaceName()).isEqualTo("서울캠핑장0");
        assertThat(result.get(0).getAddress().getRegion()).isEqualTo("서울");
        assertThat(result.get(0).getAddress().getCity()).isEqualTo("강서구");
    }

    @Test
    @DisplayName("지역별 캠핑장 수 검색")
    public void campingCountsByRegion() {
        List<CampingRegionCountsResponse> result = campingService.campingCountsByRegion();
        assertThat(result.size()).isEqualTo(1);
        assertThat(result.get(0).getCampingCounts()).isEqualTo(10);
    }


    @Test
    @DisplayName("위도 경도 범위안의 캠핑장 검색")
    public void findCampingByLocation() {
        LocationRequest location = new LocationRequest(200, 0, 200, 0);
        List<CampingPreViewResponse> campingByLocation = campingService.findCampingByLocation(location);

        assertThat(campingByLocation.size()).isEqualTo(10);

    }
}