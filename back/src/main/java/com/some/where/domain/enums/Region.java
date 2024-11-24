package com.some.where.domain.enums;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public enum Region {

    전라북도("전라북도", 35.716705, 127.144185),
    경상북도("경상북도", 36.46175410471506, 128.70307466386032),
    전라남도("전라남도", 34.939570972856664, 126.98412789316458),
    경상남도("경상남도", 35.43858243299651, 128.23582706937933),
    경기도("경기도", 37.3853781278795, 127.45300015355369),
    강원도("강원도", 37.35621555682499, 128.654822934782),
    제주특별자치도("제주도", 33.364805, 126.542671),
    충청남도("충청남도", 36.557229, 126.779757),
    충청북도("충청북도", 36.628503, 127.929344),
    대구광역시("대구", 35.87430320641331, 128.60466777730616),
    서울특별시("서울", 37.567310715770816, 126.97851629041665),
    인천광역시("인천", 37.4550787985336, 126.70621108374442),
    광주광역시("광주", 35.16446241506631, 126.84990973487504),
    대전광역시("대전", 36.35159418949772, 127.3845503868895),
    세종특별자치시("세종시", 36.482222479445724, 127.29059824645469),
    울산광역시("울산", 35.54035994896921, 129.34452199256853),
    부산광역시("부산", 35.17967107797756, 129.07421001996983);

    private String regionName;
    private double lat;
    private double lng;

    Region(String regionName, double lat, double lng) {
        this.regionName = regionName;
        this.lat = lat;
        this.lng = lng;
    }

    public static Region getRegionByName(String regionName) {
        for (Region region : Region.values()) {
            if (region.getRegionName().equals(regionName)) {
                return region;
            }
        }
        return null; // 찾지 못한 경우
    }
}
