package com.tp.pq.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.pq.models.Ruling;
import com.tp.pq.repos.RuleRepo;
import com.tp.pq.repos.RulingRepo;

@Service
public class RulingService {

    @Autowired
    private RulingRepo rulingRepo;
    @Autowired
    private RuleRepo ruleRepo;

    public Ruling createRuling(String name) {
        Ruling ruling = Ruling.builder().name(name).build();
        return rulingRepo.save(ruling);
    }

    public void deleteRuling(Long rulingId) {
        rulingRepo.deleteById(rulingId);
    }

    public void addRuleToRuling(Long rulingId, Long ruleId) {
        Ruling ruling = rulingRepo.findById(rulingId).get();
        ruling.addRule(ruleRepo.findById(ruleId).get());
        rulingRepo.save(ruling);
    }

}
