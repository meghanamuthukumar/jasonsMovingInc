package com.jason.moving.repositories;

import com.jason.moving.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {

    Customer findByCustomerId(String customerId);
}
