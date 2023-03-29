package org.itmo.web4.controller;
import org.itmo.web4.dto.PointRequest;
import org.itmo.web4.model.Point;
import org.itmo.web4.repository.PointRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/hits")
public class PointController {

    private final PointRepository pointRepository;

    public PointController(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    @GetMapping("/getPoints")
    public List<Point> getAllPoints() {
        return pointRepository.findAll();
    }

    @PostMapping("/insert")
    void insertPoint(@RequestBody PointRequest pointRequest) {
        Point point = new Point(pointRequest.getX(), pointRequest.getY(), pointRequest.getR());
        pointRepository.save(point);
    }

    @DeleteMapping(value = "/clear")
    public void deletePoints() {
        pointRepository.deleteAll();
    }




}
