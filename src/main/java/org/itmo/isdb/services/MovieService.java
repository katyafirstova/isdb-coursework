package org.itmo.isdb.services;
import org.itmo.isdb.model.*;
import org.itmo.isdb.repository.FilmRepository;
import org.itmo.isdb.repository.SessionRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.NoSuchElementException;

@Service
public class MovieService {

    FilmRepository filmRepository;
    SessionRepository sessionRepository;

    @Transactional
    public void checkFilmRating(Film film) {
        if (film.getRating() < 1 || film.getRating() > 5) {
            throw new IllegalArgumentException("Invalid film rating. Rating must be between 1 and 5.");
        }
    }

    @Transactional
    public void updateCinemaRating(CinemaReviews cinemaReview) {
        Long cinemaId = cinemaReview.getCinemaId();
        Double totalRating = filmRepository.findTotalRatingByCinemaId(cinemaId);
        Integer reviewCount = filmRepository.findReviewCountByCinemaId(cinemaId);

        Double newRating = reviewCount > 0 ? totalRating / reviewCount : 0.0;
        filmRepository.updateRating(cinemaId, newRating);
    }

    @Transactional
    public void updateMovieRating(CinemaReviews cinemaReview) {
        Long movieId = cinemaReview.getCinemaId();
        Double avgRating = filmRepository.findAvgRatingByMovieId(movieId);
        filmRepository.updateRating(movieId, avgRating);
    }



    @Transactional
    public void checkAvailableSeats(Ticket ticket) {
        Session session = sessionRepository.findById(ticket.getSessionId().getId()).orElse(null);
        if (session.getAvailableSeats() <= 0) {
            throw new NoSuchElementException("No available seats for session " + ticket.getSessionId());
        }
        sessionRepository.updateAvailableSeats(session.getId(), session.getAvailableSeats() - 1);
    }

    @Transactional
    public void cancelReservationOnTicketPurchase(Ticket ticket) {
        Long sessionId = ticket.getSessionId().getId();
        Long userId = ticket.getUserId().getId();
        sessionRepository.deleteReservationBySessionIdAndUserId(sessionId, userId);
    }
}