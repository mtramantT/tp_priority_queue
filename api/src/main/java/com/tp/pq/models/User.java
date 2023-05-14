package com.tp.pq.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pq_user")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @OneToMany(mappedBy = "user")
    private List<Schedule> schedules;

    @OneToMany(mappedBy = "user")
    private List<Ruling> rulings;

    public void addSchedule(Schedule schedule) {
        if (schedules == null) {
            schedules = new ArrayList<>();
        }
        schedules.add(schedule);
        schedule.setUser(this);
    }

    public void removeSchedule(Schedule schedule) {
        if (schedules != null) {
            schedules.remove(schedule);
            schedule.setUser(null);
        }
    }

    public void addRuling(Ruling ruling) {
        if (rulings == null) {
            rulings = new ArrayList<>();
        }
        rulings.add(ruling);
        ruling.setUser(this);
    }

    public void removeRuling(Ruling ruling) {
        if (rulings != null) {
            rulings.remove(ruling);
            ruling.setUser(null);
        }
    }
}
