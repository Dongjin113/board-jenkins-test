package com.some.where.camping.repository;

import com.some.where.domain.camping.CampingCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CampingCategoryRepository extends JpaRepository<CampingCategory, Long> {

    List<CampingCategory> findAllByCampingId(Long id);


}
