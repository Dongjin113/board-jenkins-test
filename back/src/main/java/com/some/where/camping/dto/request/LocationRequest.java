package com.some.where.camping.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LocationRequest {

    private double northLng;

    private double southLng;

    private double eastLat;

    private double westLat;

    public LocationRequest(double northLng, double southLng, double eastLat, double westLat) {
        this.northLng = northLng;
        this.southLng = southLng;
        this.eastLat = eastLat;
        this.westLat = westLat;
    }
}
