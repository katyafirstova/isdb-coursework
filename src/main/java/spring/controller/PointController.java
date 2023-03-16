package spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import spring.auth.PointRequest;
import spring.auth.ResponseMessage;
import spring.model.Point;
import spring.model.User;
import spring.repository.PointRepository;
import spring.repository.UserRepository;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api")
public class PointController {

    @Autowired
    private PointRepository pointRepository;
    @Autowired
    private UserRepository userRepository;


    @GetMapping("/points")
    public ResponseEntity<List<Point>> getAllPoints() {
        return ResponseEntity.ok(pointRepository.findByUser(getAuthUserAsEntity()));
    }


    @PostMapping("/points")
    public ResponseEntity<?> addPoint(@Valid @RequestBody PointRequest pointRequest) {
        Point newPoint =
                new Point(pointRequest.getX(), pointRequest.getY(), pointRequest.getR(), getAuthUserAsEntity());
        if (newPoint.getR() < 0)
            return ResponseEntity.badRequest().body(new String("R can not be negative!"));

        Point PointWithID = pointRepository.save(newPoint);
     //   newPointNotificationDispatcher.dispatch(newPoint);

        return ResponseEntity.ok(new ResponseMessage("Point saved Successfully"));
    }


    private User getAuthUserAsEntity() {
        return userRepository.findUserByUsername((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).get();
    }

}
