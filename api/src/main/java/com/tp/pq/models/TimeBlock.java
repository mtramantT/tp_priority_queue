package com.tp.pq.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "time_block")
public class TimeBlock {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hour")
    private Integer hour;

    @ManyToOne
    @JoinColumn(name = "ruling_id")
    private Ruling ruling;

    @ManyToOne
    @JoinColumn(name = "schedule_id")
    private Schedule schedule;
}
