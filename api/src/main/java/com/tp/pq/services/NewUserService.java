package com.tp.pq.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.pq.models.Ruling;
import com.tp.pq.models.Schedule;
import com.tp.pq.models.User;
import com.tp.pq.repos.RuleRepo;
import com.tp.pq.repos.RulingRepo;
import com.tp.pq.repos.ScheduleRepo;
import com.tp.pq.repos.TimeBlockRepo;
import com.tp.pq.repos.UserRepo;

@Service
public class NewUserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ScheduleRepo scheduleRepo;
    @Autowired
    private RulingRepo rulingRepo;
    @Autowired
    private RuleRepo ruleRepo;
    @Autowired
    private TimeBlockRepo timeBlockRepo;

    public void createNewUser(String username, String password) {
        User user = userRepo.save(User.builder().username(username).password(password).build());
    }
}
