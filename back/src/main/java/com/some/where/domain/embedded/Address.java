package com.some.where.domain.embedded;

import com.some.where.domain.enums.Region;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@NoArgsConstructor
public class Address {

    @Enumerated(EnumType.STRING)
    private Region region;
    private String city;
    private Integer postNum;
    private String roadAddress;
    private String address;

    public Address(Region region, String city, Integer postNum, String roadAddress, String address) {
        this.region = region;
        this.city = city;
        this.postNum = postNum;
        this.roadAddress = roadAddress;
        this.address = address;
    }
}
