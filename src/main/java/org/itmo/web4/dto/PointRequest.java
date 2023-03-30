package org.itmo.web4.dto;

import lombok.Getter;
import lombok.Setter;

public class PointRequest {

    @Getter
    @Setter
    private long id;

    @Getter
    @Setter
    private double x;

    @Getter
    @Setter
    private double y;

    @Getter
    @Setter
    private double r;


    private boolean result;
}
