package org.itmo.isdb.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@Table(name = "films",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "films")
        })
public class Film {

    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "rating", nullable = false)
    private Double rating;

    @Column(name = "year", nullable = false)
    private String year;

    @Column(name = "genre", nullable = false)
    private String genre;
}
