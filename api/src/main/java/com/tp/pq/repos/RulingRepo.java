package com.tp.pq.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tp.pq.models.Ruling;

@Repository
public interface RulingRepo extends JpaRepository<Ruling, Long> {

}
