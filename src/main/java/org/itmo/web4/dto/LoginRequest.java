package org.itmo.web4.dto;

import lombok.Getter;
import lombok.Setter;

public class LoginRequest {

    @Getter
    @Setter
    private String username;

    @Getter
    @Setter
    private String password;
}
