package com.jason.moving.services.impl;

import com.jason.moving.dto.CustomerDTO;
import com.jason.moving.dto.HaulDTO;
import com.jason.moving.model.Customer;
import com.jason.moving.model.Haul;
import com.jason.moving.repositories.HaulRepository;
import com.jason.moving.services.HaulService;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Log4j2
public class HaulServiceImpl implements HaulService {

    @Autowired
    private HaulRepository haulRepository;

    @Autowired
    ModelMapper modelMapper;
    @Override
    public List<HaulDTO> getAllHaulServiceByCustomerId(String customerId) {

        return null;
    }

    @Override
    public List<HaulDTO> getUpcomingHaulsByCustomerId(String customerId) {
        List<Haul> haulList = haulRepository.findByCustomerId(customerId);
        log.info("from haul implementation " + customerId);
        List<Haul> upcomingHauls = new ArrayList<>();
        Date currentDate = new Date();

        for (Haul upcomingHaul : haulList){
            int compared = upcomingHaul.getPickupDate().compareTo(currentDate);
            if(compared > 0){
                upcomingHauls.add(upcomingHaul);
                log.info("inside if loop to check upcoming hauls");
            }
        }
        return upcomingHauls.stream().map(element -> modelMapper.map(element, HaulDTO.class)).collect(Collectors.toList());
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
