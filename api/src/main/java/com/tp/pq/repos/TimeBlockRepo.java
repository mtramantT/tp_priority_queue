package com.tp.pq.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tp.pq.models.TimeBlock;

@Repository
public interface TimeBlockRepo extends JpaRepository<TimeBlock, Long> {

}
