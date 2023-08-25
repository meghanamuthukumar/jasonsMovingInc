package com.jason.moving.services.impl;

import com.jason.moving.dto.CustomerDTO;
import com.jason.moving.mapper.CustomerMapper;
import com.jason.moving.model.Customer;
import com.jason.moving.repositories.CustomerRepository;
import com.jason.moving.services.CustomerService;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CustomerDTO getCustomerByCustomerId(String customerId) {
        Customer customer = customerRepository.findByCustomerId(customerId);
        log.info("from customer service");
        log.info("customer data " + customer);
        customer.setNoOfHauls(customer.getHaulRequests().size());
        return modelMapper.map(customer, CustomerDTO.class);
    }

}
