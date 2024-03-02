package org.itmo.isdb.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@Table(name = "cinemas",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "cinemas")
        })
public class Cinema {

    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "rating", nullable = false)
    private Integer rating;

    @Column(name = "schedule", nullable = false)
    private String schedule;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Film> filmsList;

}
