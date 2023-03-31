package org.itmo.web4.controller;
import org.itmo.web4.dto.PointRequest;
import org.itmo.web4.model.Point;
import org.itmo.web4.model.User;
import org.itmo.web4.repository.PointRepository;
import org.itmo.web4.repository.UserRepository;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/points")
public class PointController {

    private final PointRepository pointRepository;
    private final UserRepository userRepository;

    public PointController(PointRepository pointRepository,
                           UserRepository userRepository) {
        this.pointRepository = pointRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/getPoints")
    public List<Point> getAllPoints(
            @CurrentSecurityContext(expression = "authentication") Authentication authentication) {
        User user = getUser(authentication).orElseThrow(()->new RuntimeException("User not found"));
        return pointRepository.findAllByCurrentUser(user.getId());
    }

    @PostMapping("/insert")
    void insertPoint(
            @RequestBody PointRequest pointRequest,
            @CurrentSecurityContext(expression = "authentication") Authentication authentication) {
        User user = getUser(authentication).orElseThrow(()->new RuntimeException("User not found"));
        Point point = new Point(pointRequest.getX(), pointRequest.getY(), pointRequest.getR(), user);
        pointRepository.save(point);
    }

    @DeleteMapping(value = "/clear")
    public void deletePoints(
            @CurrentSecurityContext(expression = "authentication") Authentication authentication) {
        User user = getUser(authentication).orElseThrow(()->new RuntimeException("User not found"));
        pointRepository.deleteByCurrentUser(user.getId());
    }

    public Optional<User> getUser(Authentication authentication) {
        if(!(authentication instanceof AnonymousAuthenticationToken)) {
            Object principal = authentication.getPrincipal();
            if(principal instanceof String) {
                return userRepository.findByUsername((String) principal);
            }
        }
        throw new RuntimeException("Anonymous user or user not found");
    }


}
