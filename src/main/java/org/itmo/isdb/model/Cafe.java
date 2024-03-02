package org.itmo.isdb.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@Table(name = "sessions",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "sessions")
        })
public class Cafe {

    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cinema_id", referencedColumnName = "cinema_id")
    private String cinema;

}
