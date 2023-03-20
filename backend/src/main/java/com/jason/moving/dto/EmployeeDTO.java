package com.jason.moving.dto;

import lombok.Data;

import java.util.Date;


@Data
public class EmployeeDTO {

    private String empNumber;

    private String name;

    private String email;

    private int noOfHauls;

    private String intro;

    private int noOfReviews;

    private String password;

    private String phone;

    private int rating;

    private String username;

    private String profilePhoto;

    private Date createdAt;

    private Date updatedAt;

}
