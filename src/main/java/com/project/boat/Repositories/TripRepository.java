package com.project.boat.Repositories;

import com.project.boat.Model.Boat;
import com.project.boat.Model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TripRepository extends JpaRepository<Trip,Long> {
//    List<Trip> findAll();
//    Trip findId(Long id);

}
