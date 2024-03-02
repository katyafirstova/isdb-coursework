package org.itmo.isdb.exceptions;

public class StoredKeyException extends RuntimeException{
    public StoredKeyException() {
    }

    public StoredKeyException(String message) {
        super(message);

    }
}
