package org.itmo.web4.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("User not found, id: " + id);
    }

    public UserNotFoundException(String user) {
        super("User not found: " + user);
    }
}
