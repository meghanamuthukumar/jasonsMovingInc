package com.jason.moving.model;

import com.jason.moving.enums.TypesOfService;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Haul {

    private String requestId;

    private String customerId;

    private List<String> employeeId;

    private String haulId;

    private LocationDetails pickupLocation;

    private Date pickupDate;

    private LocationDetails dropOffLocation;

    private Date dropoffDate;

    private String moveSize;

    private int noOfItems;

    private TypesOfService typeOfService;

    private Date createdAt;

    private Date updatedAt;

}
