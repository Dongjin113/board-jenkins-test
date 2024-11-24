package com.some.where.domain.camping;

import com.some.where.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.*;

@Getter
@Entity
@Table(name = "camping_near_amenity")
@NoArgsConstructor
public class NearAmenity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "near_amenity_id")
    private Long id;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "camping_id")
    private Camping camping;

    @Column(name = "near_fishing")
    private boolean fishing;

    @Column(name = "near_walk")
    private boolean walk;

    @Column(name = "near_beach")
    private boolean beach;

    @Column(name = "near_water_leisure")
    private boolean waterLeisure;

    @Column(name = "near_valley")
    private boolean valley;

    @Column(name = "near_river")
    private boolean river;

    @Column(name = "near_swimming_pool")
    private boolean swimmingPool;

    @Column(name = "near_teenager_experience")
    private boolean teenagerExperience;

    @Column(name = "near_rural_experience")
    private boolean ruralExperience;

    @Column(name = "near_children_playground")
    private boolean childrenPlayground;


}
