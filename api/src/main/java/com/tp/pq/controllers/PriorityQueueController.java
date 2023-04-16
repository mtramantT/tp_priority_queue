package com.tp.pq.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tp.pq.models.Chore;
import com.tp.pq.services.ChoreService;

@CrossOrigin
@RestController
@RequestMapping("/pq")
public class PriorityQueueController {

    @Autowired
    ChoreService choreService;

    @GetMapping("/test")
    public String test() {
        return "Hello PriorityQueueController!";
    }

    @GetMapping("/next")
    public Chore nextInQueue() {
        List<Chore> chores = choreService.getAllChores();
        Chore priority = null;
        for (Chore chore : chores) {
            if (priority == null) {
                priority = chore;
            } else if (chore.getPriority() < priority.getPriority()) {
                priority = chore;
            }
        }
        return priority;
    }

}
