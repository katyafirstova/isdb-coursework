package spring.auth;

import lombok.Getter;
import lombok.Setter;

public class JwtResponse {

    @Getter
    @Setter
    private String token;
//    private String type = "Bearer";
    @Getter
    @Setter
    private Long id;
    @Getter
    @Setter
    private String username;


    public JwtResponse(String token, Long id, String username) {
        this.token = token;
        this.id = id;
        this.username = username;
    }
}
