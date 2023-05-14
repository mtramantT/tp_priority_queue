package com.tp.pq.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.pq.repos.ScheduleRepo;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepo scheduleRepo;

    public void deleteSchedule(Long scheduleId) {
        scheduleRepo.deleteById(scheduleId);
    }

}
