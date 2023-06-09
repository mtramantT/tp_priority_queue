package com.tp.pq.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.tp.pq.models.Rule;
import com.tp.pq.models.Ruling;
import com.tp.pq.models.Schedule;
import com.tp.pq.models.TimeBlock;
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

    public void createNewUser(String username, String password) throws ResponseStatusException {
        Optional<User> userOptional = userRepo.findByUsername(username);
        if (userOptional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }
        User user = userRepo.save(User.builder().username(username).password(password).build());

        Rule defualtRule = Rule.createDefault();
        Ruling defaultRuling = Ruling.createDefault();
        defaultRuling.addRule(defualtRule);
        user.addRuling(defaultRuling);

        Schedule defaultSchedule = Schedule.createDefault();
        List<TimeBlock> defaultTimeBlocks = defaultSchedule.createDefaultTimeBlocks();
        defaultTimeBlocks.forEach(timeblock -> timeblock.setRuling(defaultRuling));
        user.addSchedule(defaultSchedule);

        userRepo.save(user);
        scheduleRepo.save(defaultSchedule);
        rulingRepo.save(defaultRuling);
        ruleRepo.save(defualtRule);
        timeBlockRepo.saveAll(defaultTimeBlocks);

    }

}
