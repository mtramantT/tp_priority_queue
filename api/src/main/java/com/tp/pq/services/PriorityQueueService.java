package com.tp.pq.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tp.pq.models.Chore;

@Service
public class PriorityQueueService {

    public Chore getNextchore(List<Chore> chores) {
        if (chores.size() == 0) {
            return null;
        }
        Chore nextChore = chores.get(0);
        for (Chore chore : chores) {
            if (chore.getPriority() < nextChore.getPriority()) {
                nextChore = chore;
            }
        }
        return nextChore;
    }
}
