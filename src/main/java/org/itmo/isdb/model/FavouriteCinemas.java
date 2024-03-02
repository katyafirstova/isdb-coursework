package org.itmo.isdb.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "fav_cinemas",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "fav_cinemas")
        })
public class FavouriteCinemas {

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User userId;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cinema", referencedColumnName = "id")
    private Cinema cinemaId;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "name", referencedColumnName = "name")
    private Cinema cinemaName;


}
