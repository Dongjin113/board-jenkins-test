package com.some.where.camping.repository;

import com.some.where.domain.camping.NearAmenity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NearAmenityRepository extends JpaRepository<NearAmenity, Long> {
}
