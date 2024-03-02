package org.itmo.isdb.repository;


import org.itmo.isdb.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SessionRepository extends JpaRepository<Film, Long> {

    Optional<Film> findById(Long sessionId);

    @Modifying
    @Query(value = "UPDATE sessions SET availableseats = :availableSeats WHERE id = :sessionId", nativeQuery = true)
    void updateAvailableSeats(@Param("sessionId") Long sessionId, @Param("availableSeats") int availableSeats);

    @Modifying
    @Query(value = "DELETE FROM sessions WHERE sessions.id = :sessionId AND sessions.usersid = :userId", nativeQuery = true)
    void deleteReservationBySessionIdAndUserId(@Param("sessionId") Long sessionId, @Param("userId") Long userId);
}



