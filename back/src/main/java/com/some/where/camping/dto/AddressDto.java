package com.some.where.camping.dto;

import com.some.where.domain.embedded.Address;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressDto {

    private String region;
    private String city;
    private Integer postNum;
    private String roadAddress;
    private String address;

    public AddressDto(Address address) {
        this.region = address.getRegion().getRegionName();
        this.city = address.getCity();
        this.postNum = address.getPostNum();
        this.roadAddress = address.getRoadAddress();
        this.address = address.getAddress();
    }
}
