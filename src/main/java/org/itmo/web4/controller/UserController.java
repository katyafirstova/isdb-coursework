package org.itmo.web4.controller;

import org.itmo.web4.exceptions.UserNotFoundException;
import org.itmo.web4.model.User;
import org.itmo.web4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/users")
@RestController
public class UserController {

    @Autowired
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

