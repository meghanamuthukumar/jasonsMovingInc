package com.jason.moving.repositories;

import com.jason.moving.model.Haul;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HaulRepository extends MongoRepository<Haul, String> {
    List<Haul> findByCustomerId(String customerId);
}
