//package org.itmo.web4.controller;
//
//
//import org.itmo.web4.model.Point;
//import org.itmo.web4.repository.PointRepository;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//
//@RestController
//public class PointController {
//
//
//
//   private final PointRepository pointRepository;
//
//    public PointController(PointRepository pointRepository) {
//        this.pointRepository = pointRepository;
//    }
//
//    @GetMapping("/points")
//    public List<Point> getAllPoints() {
//        return pointRepository.findAll();
//    }
//
//
//}
