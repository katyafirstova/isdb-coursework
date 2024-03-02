package org.itmo.isdb.controller;

import org.itmo.isdb.dto.MovieReviewRequest;
import org.itmo.isdb.exceptions.UserNotFoundException;
import org.itmo.isdb.model.User;
import org.itmo.isdb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @GetMapping("/")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + userId));
    }

    @PostMapping("/")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/{userId}")
    public User updateUser(@PathVariable Long userId, @RequestBody User userDetails) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + userId));

        user.setUsername(userDetails.getUsername());
        user.setSurname(userDetails.getSurname());
        return userRepository.save(user);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userRepository.deleteById(userId);
    }

    @GetMapping("/{userId}/favoriteMovies")
    public ResponseEntity<String> getUserFavoriteCinemas(@PathVariable int userId) {
        String favoriteCinemas = userRepository.getUserFavoriteCinemas(userId);
        return ResponseEntity.ok(favoriteCinemas);
    }

    @GetMapping("/{userId}/favoriteMovies")
    public ResponseEntity<String> getUserFavoriteMovies(@PathVariable int userId) {
        String favoriteMovies = userRepository.getUserFavoriteMovies(userId);
        return ResponseEntity.ok(favoriteMovies);
    }
    @PostMapping("/addMovieReview")
    public ResponseEntity<Void> addMovieReview(@RequestBody MovieReviewRequest request) {
        userRepository.addMovieReview(request.getUserId(), request.getFilmId(), request.getRating(),
                request.getReviewText());
        return ResponseEntity.ok().build();
    }

}

