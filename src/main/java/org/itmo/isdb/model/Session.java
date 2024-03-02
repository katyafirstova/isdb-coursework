package org.itmo.isdb.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@Table(name = "sessions",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "sessions")
        })
public class Session {

    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "startTime", nullable = false)
    private Date startTime;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "availableSeats", nullable = false)
    private Integer availableSeats;

    @Column(name = "schedule", nullable = false)
    private String schedule;

}
