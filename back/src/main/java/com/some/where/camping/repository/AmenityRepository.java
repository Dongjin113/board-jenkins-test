package com.some.where.camping.repository;

import com.some.where.domain.camping.Amenity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AmenityRepository extends JpaRepository<Amenity,Long> {
}
