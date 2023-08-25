package com.jason.moving.controller;

import com.jason.moving.dto.CustomerDTO;
import com.jason.moving.model.Customer;
import com.jason.moving.repositories.CustomerRepository;
import com.jason.moving.services.CustomerService;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@RestController
@RequestMapping("api/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/{customerId}")
    public CustomerDTO getCustomerByCustomerId(@PathVariable String customerId){

        log.info("from customer info " + customerId);
        return customerService.getCustomerByCustomerId(customerId);

    }

    @GetMapping("/all")
    public List<CustomerDTO> getAllCustomerDetails(){

        log.info("from customer info return all");
        List<Customer> customerList = customerRepository.findAll();
        return customerList.stream().map(element -> modelMapper.map(element, CustomerDTO.class)).collect(Collectors.toList());

    }
}
