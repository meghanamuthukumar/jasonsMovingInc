package com.jason.moving.mapper;


import com.jason.moving.dto.CustomerDTO;
import com.jason.moving.model.Customer;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.ParseException;

public class CustomerMapper {

    @Autowired
    private ModelMapper modelMapper;

    private CustomerDTO convertToDto(Customer customer) {
        CustomerDTO customerDTO = modelMapper.map(customer, CustomerDTO.class);
        return customerDTO;
    }

    private Customer convertToEntity(CustomerDTO customerDTO) throws ParseException {
        Customer customer = modelMapper.map(customerDTO, Customer.class);

        return customer;
    }


}
