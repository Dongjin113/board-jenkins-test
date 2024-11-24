package com.some.where.domain.camping;

import com.some.where.domain.BaseEntity;
import com.some.where.domain.embedded.Address;
import com.some.where.domain.embedded.Location;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.GenerationType.IDENTITY;
import static lombok.AccessLevel.PROTECTED;

@Getter
@Entity
@NoArgsConstructor(access = PROTECTED)
public class Camping extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "camping_id")
    private Long id;
    private String placeName;
    @Embedded
    private Location location;
    @Embedded
    private Address address;
    private String homePage;
    private String owner;
    private String phoneNum;
    private String subIntro;
    private String introduce;

    @OneToMany(mappedBy = "camping")
    private List<CampingCategory> campingCategories = new ArrayList<>();

    @Builder
    public Camping(String placeName, Location location, Address address, String homePage, String owner, String phoneNum, String subIntro, String introduce) {
        this.placeName = placeName;
        this.location = location;
        this.address = address;
        this.homePage = homePage;
        this.owner = owner;
        this.phoneNum = phoneNum;
        this.subIntro = subIntro;
        this.introduce = introduce;
    }
}
