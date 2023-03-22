package org.itmo.web4.application.controller;

import org.itmo.web4.application.model.User;
import org.itmo.web4.application.repository.UserRepository;
import org.itmo.web4.exceptions.UserNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    List<User> all() {

        return userRepository.findAll();
    }

    @PostMapping("/employees")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id) throws UserNotFoundException {


        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}

