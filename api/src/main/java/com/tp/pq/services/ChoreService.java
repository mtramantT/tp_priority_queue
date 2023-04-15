package com.tp.pq.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.pq.models.Chore;
import com.tp.pq.repos.ChoreRepo;

@Service
public class ChoreService {

    @Autowired
    ChoreRepo choreRepo;

    public List<Chore> getAllChores() {
        return choreRepo.findAll();
    }

    public Chore getChoreById(int id) {
        return choreRepo.getReferenceById(id);
    }

    public Chore saveChore(Chore chore) {
        return choreRepo.save(chore);
    }

    public Chore deleteChore(Chore chore) {
        choreRepo.delete(chore);
        return chore;
    }

}
