package com.some.where.camping.repository;

import com.some.where.camping.dto.response.CampingRegionCountsResponse;
import com.some.where.domain.camping.Camping;
import com.some.where.domain.enums.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CampingRepository extends JpaRepository<Camping, Long>, CampingRepositoryCustom {

    @Query("select distinct c from Camping c left join fetch c.campingCategories where c.address.region = :region")
    List<Camping> findAllByRegionFetchJoinCategory(@Param("region") Region region);

    @Query("""
            select new com.some.where.camping.dto.response.CampingRegionCountsResponse(c.address.region, Count(c)) 
            from Camping c 
            group by c.address.region
            """)
    List<CampingRegionCountsResponse> findGroupByAddressRegionCounts();

    @Query("""
            select distinct c from Camping c 
            left join fetch c.campingCategories 
            where c.location.lat BETWEEN :westLat AND :eastLat 
            And c.location.lng BETWEEN :southLng AND :northLng """)
    List<Camping> findAllByLocation(@Param("westLat") double westLat, @Param("eastLat") double eastLat,
                                    @Param("northLng") double northLng, @Param("southLng") double southLng);
}
