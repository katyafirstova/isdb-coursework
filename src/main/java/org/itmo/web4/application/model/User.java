package org.itmo.web4.application.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.*;


@Entity
@Table(name = "users")
@NoArgsConstructor
public class User {

    @Id
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private long id;

    @Getter
    @Setter
    @Column(name = "username", nullable = false)
    private String username;

    @Getter
    @Setter
    @Column(name = "password", nullable = false)
    private String password;


    public User(String username, String password) {
    }


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
