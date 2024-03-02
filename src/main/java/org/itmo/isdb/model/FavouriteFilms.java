package org.itmo.isdb.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "fav_films",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "fav_films")
        })
public class FavouriteFilms {
    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private long userId;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "film_id", referencedColumnName = "id")
    private long FilmId;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "name", referencedColumnName = "name")
    private String filmName;


}
