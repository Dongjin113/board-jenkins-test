package com.some.where.camping.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CampingRepositoryCustomImpl implements CampingRepositoryCustom{
    private final JPAQueryFactory jpaQueryFactory;
}
