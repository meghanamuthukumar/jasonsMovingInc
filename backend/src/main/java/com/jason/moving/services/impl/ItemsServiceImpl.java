package com.jason.moving.services.impl;

import com.jason.moving.dto.HaulDTO;
import com.jason.moving.dto.ItemsDTO;
import com.jason.moving.model.Items;
import com.jason.moving.repositories.HaulRepository;
import com.jason.moving.repositories.ItemsRepository;
import com.jason.moving.services.ItemsService;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@Service
public class ItemsServiceImpl implements ItemsService {

    @Autowired
    private ItemsRepository itemsRepository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<ItemsDTO> getAllItemsDetais() {

        List<Items> itemsList = itemsRepository.findAll();

        return itemsList.stream().map(element -> modelMapper.map(element, ItemsDTO.class)).collect(Collectors.toList());
    }
}
