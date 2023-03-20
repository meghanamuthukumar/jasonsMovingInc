package com.jason.moving.services.impl;

import com.jason.moving.dto.HaulDTO;
import com.jason.moving.repositories.HaulRepository;
import com.jason.moving.services.HaulService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HaulServiceImpl implements HaulService {

    @Autowired
    private HaulRepository haulRepository;

    @Override
    public List<HaulDTO> getAllHaulServiceByCustomerId(String customerId) {

        return null;
    }

    @Override
    public List<HaulDTO> getUpcomingHaulsByCustomerId(String customerId) {
        return null;
    }

    @Override
    public List<HaulDTO> getPastHaulsByCustomerId(String customerId) {
        return null;
    }

    @Override
    public HaulDTO createNewHaulRequestForCustomer(String customerId) {
        return null;
    }

}
