package org.itmo.web4.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.*;


@Entity
@Table(name = "point_table")
public class Point {

    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private long id;

    @Getter
    @Setter
    private double x;

    @Getter
    @Setter
    private double y;

    @Getter
    @Setter
    private double r;
    private boolean result;

    @Getter
    @Setter
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private User user;

    public Point(long id, double x, double y, double r, boolean result) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }

    public Point(long id, double x, double y, double r, boolean result, User user) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.user = user;
    }

    public Point(long id, double x, double y, double r, User user) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.user = user;
    }

    public Point(double x, double y, double r, User user) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.user = user;
    }

    public Point() {

    }


    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    private boolean isRectangleHit() {
        return x <= 0 && y >= 0 && x >= -r && y >= r / 2;
    }

    private boolean isCircleHit() {
        return x >= 0 && y <= 0 && (x * x + y * y <= r * r / 4);
    }

    private boolean isTriangleHit() {
        return x >= 0 && y >= 0 && (x * x + y * y <= r * r);
    }

    public void validate() {
        this.result = isRectangleHit() || isCircleHit() || isTriangleHit();
    }




}
