package org.itmo.web4.controller;

import org.itmo.web4.auth.JwtResponse;
import org.itmo.web4.auth.LoginRequest;
import org.itmo.web4.auth.ResponseMessage;
import org.itmo.web4.auth.SignupRequest;
import org.itmo.web4.exceptions.UserNotFoundException;
import org.itmo.web4.jwt.JwtUtils;
import org.itmo.web4.model.User;
import org.itmo.web4.repository.UserRepository;
import org.itmo.web4.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JwtUtils jwtUtils;

    UserDetailsImpl userDetails;

    @GetMapping("/auth")
    public ResponseEntity<?> authUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);


        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername()));

    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new ResponseMessage("This username is already exists"));
        }

        User user = new User(signupRequest.getUsername(), passwordEncoder.encode(signupRequest.getPassword()));
        userRepository.save(user);

        return ResponseEntity.ok(new ResponseMessage("User created"));


    }

    @GetMapping("/users")
    List<User> all() {
        return userRepository.findAll();
    }

    @PostMapping("/addUser")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id) throws UserNotFoundException {


        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }


}

