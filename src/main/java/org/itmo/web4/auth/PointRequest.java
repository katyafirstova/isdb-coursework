package org.itmo.web4.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PointRequest {

    @NotNull
    @Min(-3)
    @Max(3)
    private Double x, r;
    @NotNull
    @Min(-3)
    @Max(5)
    private Double y;




}
