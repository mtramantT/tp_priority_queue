package com.tp.pq.models;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.tp.pq.util.FreaquenceType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "chores")
public class Chore {
    @Id
    @Column(name = "chore_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "priority")
    private int priority;

    @OneToMany(mappedBy = "chore")
    @JsonManagedReference
    private List<Task> tasks;

    @Column(name = "last_completed")
    private Date lastCompleted;

    @Column(name = "frequency")
    private int frequency;

    @Column(name = "frequency_type")
    private String frequencyType;
}
