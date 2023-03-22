package org.itmo.web4.application.controller;//package controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.*;
//import spring.jwt.JwtUtils;
//import spring.model.User;
//import auth.JwtResponse;
//import auth.LoginRequest;
//import auth.ResponseMessage;
//import auth.SignupRequest;
//import spring.repository.UserRepository;
//import spring.services.UserDetailsImpl;
//
//@RestController
//@RequestMapping("/api/auth")
//@CrossOrigin(origins = "*", maxAge = 3600)
//public class AuthController {
//
//    @Autowired
//    AuthenticationManager authenticationManager;
//    @Autowired
//    UserRepository userRepository;
//    @Autowired
//    PasswordEncoder passwordEncoder;
//    @Autowired
//    JwtUtils jwtUtils;
//
//    UserDetailsImpl userDetails;
//
//    @PostMapping("/signin")
//    public ResponseEntity<?> authUser(@RequestBody LoginRequest loginRequest) {
//        Authentication authentication = authenticationManager.authenticate
//                (new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        String jwt = jwtUtils.generateJwtToken(authentication);
//
//
//        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername()));
//
//    }
//
//    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
//        if (userRepository.existsByUsername(signupRequest.getUsername())) {
//            return ResponseEntity.badRequest().body(new ResponseMessage("This username is already exists"));
//        }
//
//        User user = new User(signupRequest.getUsername(), passwordEncoder.encode(signupRequest.getPassword()));
//        userRepository.save(user);
//
//        return ResponseEntity.ok(new ResponseMessage("User created"));
//
//
//    }
//
//
//}
//
