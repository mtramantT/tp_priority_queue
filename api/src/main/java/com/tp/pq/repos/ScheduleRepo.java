package com.tp.pq.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tp.pq.models.Schedule;

@Repository
public interface ScheduleRepo extends JpaRepository<Schedule, Long> {

}
