package org.itmo.web4.repository;


import org.itmo.web4.model.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepository extends JpaRepository<Point, Long> {

    @Query("FROM Point g where g.id = :userId")
    List<Point> findAllByCurrentUser(@Param("userId") Long userId);

    @Modifying
    @Query("DELETE FROM Point g where g.id = :userId")
    List<Point> deleteByCurrentUser(@Param("userId") Long userId);

}
