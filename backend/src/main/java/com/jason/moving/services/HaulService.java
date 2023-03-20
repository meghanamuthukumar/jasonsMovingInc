package com.jason.moving.services;

import com.jason.moving.dto.HaulDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface HaulService {
    List<HaulDTO> getAllHaulServiceByCustomerId(String customerId);

    List<HaulDTO> getUpcomingHaulsByCustomerId(String customerId);

    List<HaulDTO> getPastHaulsByCustomerId(String customerId);

    HaulDTO createNewHaulRequestForCustomer(String customerId);
}
