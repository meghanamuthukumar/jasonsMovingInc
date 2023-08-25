package com.jason.moving.model;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Customer {

    private String customerId;
    private String name;

    private String email;

    private String phone;

    private List<String> haulRequests;

    private String location;

    private String userId;

    private Date createdAt;

    private Date updatedAt;

    private int noOfHauls;
}
