package com.tp.pq.dtos;

import java.util.List;

import com.tp.pq.models.Task;

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

    // private int frequency;
    // private boolean isComplete;
    // private boolean isRecurring;
}
