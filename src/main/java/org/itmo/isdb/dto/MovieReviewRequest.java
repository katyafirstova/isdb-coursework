package org.itmo.isdb.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
public class MovieReviewRequest {

    private long id;

    private long userId;

    private long filmId;

    private long rating;

    private String reviewText;
}
