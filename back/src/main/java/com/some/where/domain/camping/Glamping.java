package com.some.where.domain.camping;

import com.some.where.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.FetchType.*;
import static jakarta.persistence.GenerationType.*;
import static lombok.AccessLevel.*;

@Getter
@Entity
@NoArgsConstructor(access = PROTECTED)
@Table(name = "camping_glamping")
public class Glamping extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "glamping_id")
    private Long id;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "camping_id")
    private Camping camping;

    @Column(name = "glamping_bed")
    private boolean bed;

    @Column(name = "glamping_tv")
    private boolean tv;

    @Column(name = "glamping_refrigerator")
    private boolean refrigerator;

    @Column(name = "glamping_internet")
    private boolean internet;

    @Column(name = "glamping_toilet")
    private boolean toilet;

    @Column(name = "glamping_air_conditioner")
    private boolean airConditioner;

    @Column(name = "glamping_heat")
    private boolean heat;

    @Column(name = "glamping_cookware")
    private boolean cookware;

}
