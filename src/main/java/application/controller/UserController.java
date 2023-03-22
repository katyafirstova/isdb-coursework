package application.controller;

import application.model.User;
import application.repository.UserRepository;
import exceptions.UserNotFoundException;
import javassist.NotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


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
    User getUserById(@PathVariable Long id) throws NotFoundException {


        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}

