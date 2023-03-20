package com.jason.moving.model;

import com.jason.moving.enums.TypeOfLocation;
import lombok.Data;

@Data
public class LocationDetails {

    private String address;

    private TypeOfLocation typeOfLocation;

    private String unitNumber;

    private String buzzCode;

    private int noOfFlights;

    private String size;

    private String additionalDetails;

    private Boolean saveAddress;

}
