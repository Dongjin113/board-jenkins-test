package com.some.where.camping.repository;

import com.some.where.domain.camping.Glamping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GlampingRepository extends JpaRepository<Glamping, Long> {
}
