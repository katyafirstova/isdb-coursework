package org.itmo.isdb.repository;


import org.itmo.isdb.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface FilmRepository extends JpaRepository<Film, Long>  {

    @Query(value = " SELECT DISTINCT m.*\n" +
            "   FROM Movies m\n" +
            "   JOIN MovieReviews mr ON m.ID = mr.MovieID\n" +
            "   WHERE mr.UserID = userid;", nativeQuery = true)
    Double findTotalRatingByCinemaId(@Param("cinemaId") Long cinemaId);

    @Query(value = "SELECT COUNT(*) FROM cinemareviews WHERE cinemaid = :cinemaId", nativeQuery = true)
    Integer findReviewCountByCinemaId(@Param("cinemaId") Long cinemaId);

    @Query(value = "SELECT m.*\n" +
            "   FROM Movies m\n" +
            "   INNER JOIN Genres g ON m.Genre = g.Name\n" +
            "   WHERE g.Name = g.name;", nativeQuery = true)
    List<Film> getFilmsByGenre(String genre);

    @Transactional
    @Modifying
    @Query(value = "UPDATE films SET rating = :newRating WHERE id = :filmId", nativeQuery = true)
    void updateRating(@Param("filmId") Long filmId, @Param("newRating") Double newRating);

    @Query(value = " SELECT COALESCE(AVG(Rating), 0) INTO avgRating\n" +
            "   FROM MovieReviews\n" +
            "   WHERE MovieReviews.MovieID = movieId;\n", nativeQuery = true)
    Double findAvgRatingByMovieId(@Param("movieId") Long movieId);


}
