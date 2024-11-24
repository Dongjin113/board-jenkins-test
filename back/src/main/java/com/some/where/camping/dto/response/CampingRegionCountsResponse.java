package com.some.where.camping.dto.response;

import com.some.where.domain.enums.Region;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CampingRegionCountsResponse {

    private String region;
    private Long campingCounts;
    private double lat;
    private double lng;

    @Builder
    public CampingRegionCountsResponse(Region region, Long campingCounts) {
        this.region = region.getRegionName();
        this.campingCounts = campingCounts;
        this.lat = region.getLat();
        this.lng = region.getLng();
    }
}
