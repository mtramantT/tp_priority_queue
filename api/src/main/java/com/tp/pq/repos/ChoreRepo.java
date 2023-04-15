package com.tp.pq.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tp.pq.models.Chore;

@Repository
public interface ChoreRepo extends JpaRepository<Chore, Integer> {

}
