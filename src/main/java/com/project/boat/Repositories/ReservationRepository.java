package com.project.boat.Repositories;

import com.project.boat.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
//    List<Reservation> findAll();
//    Reservation findId(Long id);
}
