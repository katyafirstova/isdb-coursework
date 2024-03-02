package org.itmo.isdb.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@Table(name = "food_transactions",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "food_transactions")
        })
public class FoodTransactions {


    @Id
    @org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "userId", nullable = false)
    private long userId;

    @Column(name = "cost", nullable = false)
    private Integer cost;


}
