package com.tp.pq.controllers;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tp.pq.dtos.ChoreDTO;
import com.tp.pq.models.Chore;
import com.tp.pq.services.ChoreService;

@RestController
@RequestMapping("/chores")
public class ChoreController {

    @Autowired
    ChoreService choreService;

    ModelMapper mapper = new ModelMapper();

    @GetMapping("/test")
    public String test() {
        return "Hello ChoreController!!";
    }

    @GetMapping("/chores")
    public List<ChoreDTO> getAllChores() {
        List<Chore> chores = choreService.getAllChores();
        List<ChoreDTO> choreDTOs = new ArrayList<>();
        for (Chore chore : chores) {
            ChoreDTO choreDTO = mapper.map(chore, ChoreDTO.class);
            choreDTOs.add(choreDTO);
        }
        return choreDTOs;
    }

    @GetMapping("/chore/{id}")
    public ResponseEntity<ChoreDTO> getChoreById(@PathVariable int id) {
        Chore chore = choreService.getChoreById(id);
        ChoreDTO choreDTO = mapper.map(chore, ChoreDTO.class);
        return ResponseEntity.ok(choreDTO);
    }

    @PostMapping("/chore")
    public ChoreDTO createChore(ChoreDTO choreDTO) {
        Chore chore = mapper.map(choreDTO, Chore.class);
        chore = choreService.createChore(chore);
        choreDTO = mapper.map(chore, ChoreDTO.class);
        return choreDTO;
    }

    @DeleteMapping("/chore/{id}")
    public ChoreDTO deleteChore(@PathVariable int id) {
        Chore chore = choreService.getChoreById(id);
        ChoreDTO choreDTO = mapper.map(chore, ChoreDTO.class);
        chore = choreService.deleteChore(chore);
        choreDTO = mapper.map(chore, ChoreDTO.class);
        return choreDTO;
    }

    @PutMapping("/chore/{id}")
    public ChoreDTO updateChore(@PathVariable int id, ChoreDTO choreDTO) {
        Chore chore = choreService.getChoreById(id);
        chore = mapper.map(choreDTO, Chore.class);
        chore = choreService.createChore(chore);
        choreDTO = mapper.map(chore, ChoreDTO.class);
        return choreDTO;
    }

    @PatchMapping("/chore/{id}")
    public ChoreDTO patchChore(@PathVariable int id, ChoreDTO choreDTO) {
        Chore chore = choreService.getChoreById(id);
        chore = mapper.map(choreDTO, Chore.class);
        chore = choreService.createChore(chore);
        choreDTO = mapper.map(chore, ChoreDTO.class);
        return choreDTO;
    }

}
