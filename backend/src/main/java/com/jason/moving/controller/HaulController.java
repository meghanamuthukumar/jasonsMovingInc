package com.jason.moving.controller;

import com.jason.moving.dto.HaulDTO;
import com.jason.moving.services.HaulService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hauls")
public class HaulController {

    @Autowired
    private HaulService haulService;

    @GetMapping("/customer/{customerId}")
    public List<HaulDTO> getAllHaulServiceByCustomerId(String customerId){
        return haulService.getAllHaulServiceByCustomerId(customerId);
    }

    @GetMapping("/upcoming/{customerId}")
    public List<HaulDTO> getUpcomingHaulsByCustomerId(String customerId){
        return haulService.getUpcomingHaulsByCustomerId(customerId);
    }

    @GetMapping("/past/{customerId}")
    public List<HaulDTO> getPastHaulsByCustomerId(String customerId){
        return haulService.getPastHaulsByCustomerId(customerId);
    }

    @PostMapping("newHaul/{customerId}")
    public HaulDTO craeteNewHaulRequestForCustomer(String customerId){
        return haulService.createNewHaulRequestForCustomer(customerId);
    }




}
