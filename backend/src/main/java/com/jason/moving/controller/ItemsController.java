package com.jason.moving.controller;

import com.jason.moving.dto.CustomerDTO;
import com.jason.moving.dto.ItemsDTO;
import com.jason.moving.model.Customer;
import com.jason.moving.repositories.CustomerRepository;
import com.jason.moving.services.CustomerService;
import com.jason.moving.services.ItemsService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@RestController
@RequestMapping("api/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemsController {

    @Autowired
    ItemsService itemsService;

    @GetMapping("/all")
    public List<ItemsDTO> getAllItemsDetails(){

        log.info("from customer info return all");
        return itemsService.getAllItemsDetais();

    }
}
