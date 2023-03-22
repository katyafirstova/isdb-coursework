//package org.itmo.web4.model;
//
//import lombok.Getter;
//import lombok.Setter;
//import org.springframework.data.annotation.Id;
//
//import javax.persistence.*;
//
//
////@Entity
////@Table(name = "point_table")
//public class Point {
//
//    @javax.persistence.Id
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Getter
//    @Setter
//    private long id;
//
//    @Getter
//    @Setter
//    private double x;
//
//    @Getter
//    @Setter
//    private double y;
//
//    @Getter
//    @Setter
//    private double r;
//    private boolean result;
//
//    @Getter
//    @Setter
//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
//    private User initiator;
//
//    public Point(Double x, Double y, Double r, User authUserAsEntity) {
//
//    }
//
//    public Point() {
//
//    }
//
//
//    private boolean isRectangleHit() {
//        return x <= 0 && y >= 0 && x >= -r && y >= r / 2;
//    }
//
//    private boolean isCircleHit() {
//        return x >= 0 && y <= 0 && (x * x + y * y <= r * r / 4);
//    }
//
//    private boolean isTriangleHit() {
//        return x >= 0 && y >= 0 && (x * x + y * y <= r * r);
//    }
//
//    public void validate() {
//        this.result = isRectangleHit() || isCircleHit() || isTriangleHit();
//    }
//
//
//}
