package com.jason.moving.dto;

import com.jason.moving.enums.TypesOfService;
import com.jason.moving.model.LocationDetails;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class HaulDTO {

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
