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
public class CinemaReviews {

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User userId;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cinema_id", referencedColumnName = "cinema_id")
    private long cinemaId;

}




