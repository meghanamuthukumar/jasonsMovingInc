package com.jason.moving.controller;

import com.jason.moving.dto.CustomerDTO;
import com.jason.moving.services.CustomerService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequestMapping("api/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/{customerId}")
    public CustomerDTO getCustomerByCustomerId(@PathVariable String customerId){

        log.info("from customer info" + customerId);
        return customerService.getCustomerByCustomerId(customerId);

    }

}
