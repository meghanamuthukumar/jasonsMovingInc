package com.jason.moving.repositories;

import com.jason.moving.model.Customer;
import com.jason.moving.model.Items;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemsRepository extends MongoRepository<Items, String> {
}
