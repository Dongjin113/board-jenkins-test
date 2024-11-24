package com.some.where.domain.camping;

import com.some.where.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.*;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "operate_period")
public class OperatePeriod extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "operate_id")
    private Long id;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "camping_id")
    private Camping camping;

    @Column(name = "weekday_operate")
    private boolean weekday;

    @Column(name = "weekend_operate")
    private boolean weekend;

    @Column(name = "spring_operate")
    private boolean spring;

    @Column(name = "summer_operate")
    private boolean summer;

    @Column(name = "autumn_operate")
    private boolean autumn;

    @Column(name = "winter_operate")
    private boolean winter;

}
