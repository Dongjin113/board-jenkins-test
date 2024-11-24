package com.some.where.domain.camping;

import com.some.where.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;
import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
@Table(name = "camping_amenity")
public class Amenity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "amenity_id")
    private Long id;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "camping_id")
    private Camping camping;

    @Column(name = "amenity_electric")
    private String electric;

    @Column(name = "amenity_hot_water")
    private String hotWater;

    @Column(name = "amenity_wifi")
    private String wifi;

    @Column(name = "amenity_firewood")
    private String firewood;

    @Column(name = "amenity_walk")
    private String walk;

    @Column(name = "amenity_water_park")
    private String waterPark;

    @Column(name = "amenity_playground")
    private String playGround;

    @Column(name = "amenity_mart")
    private String mart;

    @Column(name = "amenity_toilet")
    private Integer toilet;

    @Column(name = "amenity_shower_room")
    private Integer showerRoom;

    @Column(name = "amenity_sink")
    private Integer sink;

    @Column(name = "amenity_fire_extinguisher")
    private Integer fireExtinguisher;

}
