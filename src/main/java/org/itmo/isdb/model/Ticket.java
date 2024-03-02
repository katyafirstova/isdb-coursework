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
public class Ticket {

    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private Session userId;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sessionId", referencedColumnName = "id")
    private Session sessionId;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "startTime", referencedColumnName = "startTime")
    private Session sessionStartTime;


}
