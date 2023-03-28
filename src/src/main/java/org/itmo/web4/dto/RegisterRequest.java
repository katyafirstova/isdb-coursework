package org.itmo.web4.dto;

import lombok.Getter;
import lombok.Setter;

public class RegisterRequest {

    @Getter
    @Setter
    private String username;

    @Getter
    @Setter
    private String password;


}
