package org.itmo.isdb.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "cinema_reviews",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "cinema_reviews")
        })
public class FilmReviews {


    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private long userId;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "film_id", referencedColumnName = "id")
    private long filmId;

    private long rating;

    private String reviewText;

}




