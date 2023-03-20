package com.jason.moving.services;

import com.jason.moving.dto.CustomerDTO;
import org.springframework.stereotype.Service;

public interface CustomerService {

    CustomerDTO getCustomerByCustomerId(String customerId);

}
