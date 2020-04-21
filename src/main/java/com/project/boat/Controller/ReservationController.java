package com.project.boat.Controller;

import com.project.boat.Model.Reservation;
import com.project.boat.Repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/reservation")
public class ReservationController {
    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping
    public List<Reservation> getReservations(){
        return reservationRepository.findAll();
    }

    @PostMapping
    public void addREservation(@RequestBody Reservation reservation){
        reservationRepository.save(reservation);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id){
        reservationRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public void updateReservation(@PathVariable("id") Long id,@RequestBody Reservation reservation){
        reservation.setId(id);
        reservationRepository.save(reservation);
    }
}
