package com.jason.moving.repositories;

import com.jason.moving.model.Haul;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HaulRepository extends MongoRepository<Haul, String> {
}
