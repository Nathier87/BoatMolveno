package com.project.boat.Controller;

import com.project.boat.Model.Trip;
import com.project.boat.Repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.time.Duration;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/trip")
public class TripController {
    @Autowired
    private TripRepository tripRepository;

    @GetMapping
    public List<Trip> getTrips() {
        return tripRepository.findAll();
    }

    @PostMapping
    public void addTrip(@RequestBody Trip trip) {
        trip.setStarttime(LocalDateTime.now());
        tripRepository.save(trip);
    }

    @DeleteMapping("/{id}")
    public void deleteTrip(@PathVariable Long id) {
        tripRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Trip stopTrip(@PathVariable Long id) {
        Trip trip = tripRepository.getOne(id);
        trip.setStoptime(LocalDateTime.now());
        Duration duration = Duration.between(trip.getStarttime(), trip.getStoptime());
        long seconds = duration.getSeconds();
        long minutes = seconds / 60;
        trip.setDuration(minutes);
        return tripRepository.save(trip);
    }
}