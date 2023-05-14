package com.tp.pq.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "schedules")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Schedule {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "pq_user_id")
    private User user;

    @OneToMany(mappedBy = "schedule")
    private List<TimeBlock> timeBlocks;

    public void addTimeBlock(TimeBlock timeBlock) {
        if (timeBlocks == null) {
            timeBlocks = new ArrayList<>();
        }
        timeBlocks.add(timeBlock);
        timeBlock.setSchedule(this);
    }

    public void addAllTimeblocks(List<TimeBlock> timeBlocks) {
        if (this.timeBlocks == null) {
            this.timeBlocks = new ArrayList<>();
        }
        this.timeBlocks.addAll(timeBlocks);
        for (TimeBlock timeBlock : timeBlocks) {
            timeBlock.setSchedule(this);
        }
    }

    public List<TimeBlock> createDefaultTimeBlocks() {
        List<TimeBlock> timeBlocks = new ArrayList<>();
        for (int i = 0; i < 24; i++) {
            TimeBlock timeBlock = TimeBlock.builder().hour(i).schedule(this).build();
            timeBlocks.add(timeBlock);
        }
        return timeBlocks;
    }

    public static Schedule createDefault() {
        return Schedule.builder().name("My very first schedule!").build();
    }

}
