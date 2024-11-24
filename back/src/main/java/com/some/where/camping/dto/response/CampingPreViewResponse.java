package com.some.where.camping.dto.response;

import com.some.where.camping.dto.AddressDto;
import com.some.where.domain.camping.Camping;
import com.some.where.domain.camping.CampingCategory;
import com.some.where.domain.embedded.Location;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class CampingPreViewResponse {

    private Long campingId;
    private String placeName;
    private AddressDto address;
    private Location location;
    private String phoneNum;
    private String homePage;
    private String subIntro;
    private List<String> categories = new ArrayList<>();

    @Builder
    public CampingPreViewResponse(
            Long campingId, String placeName, AddressDto address,
            Location location, String phoneNum, String homePage,
            String subIntro, List<String> categories
    ) {
        this.campingId = campingId;
        this.placeName = placeName;
        this.address = address;
        this.location = location;
        this.phoneNum = phoneNum;
        this.homePage = homePage;
        this.subIntro = subIntro;
        this.categories = categories;
    }

    public static CampingPreViewResponse of(Camping camping, List<CampingCategory> categories) {
        List<String> categoryList = new ArrayList<>();
        categories.forEach(campingCategory -> categoryList.add(campingCategory.getCategory().getName()));

        return CampingPreViewResponse.builder()
                .campingId(camping.getId())
                .placeName(camping.getPlaceName())
                .address(new AddressDto(camping.getAddress()))
                .location(camping.getLocation())
                .phoneNum(camping.getPhoneNum())
                .homePage(camping.getHomePage())
                .subIntro(camping.getSubIntro())
                .categories(categoryList)
                .build();
    }

}
