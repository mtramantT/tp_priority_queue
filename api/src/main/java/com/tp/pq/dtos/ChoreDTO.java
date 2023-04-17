package com.tp.pq.dtos;

import java.util.Date;
import java.util.List;

import com.tp.pq.models.Task;
import com.tp.pq.util.FreaquenceType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Lombok anotations
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChoreDTO {
    private long id;
    private String name;
    private String description;
    private int priority;
    private List<Task> tasks;
    private Date lastCompleted;
    private int frequency;
    private FreaquenceType frequencyType;
}
