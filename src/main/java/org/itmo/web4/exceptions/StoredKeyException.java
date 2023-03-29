package org.itmo.web4.exceptions;

public class StoredKeyException extends RuntimeException{
    public StoredKeyException() {
    }

    public StoredKeyException(String message) {
        super(message);

    }
}
