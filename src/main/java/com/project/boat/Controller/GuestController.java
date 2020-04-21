package com.project.boat.Controller;

import com.project.boat.Model.Guest;
import com.project.boat.Repositories.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/guest")
public class GuestController {
    @Autowired
    private GuestRepository guestRepository;

    @GetMapping( )
    public List<Guest> getGuests(){
        return guestRepository.findAll();
    }
    @PostMapping
    public void addGuest(@RequestBody Guest guest){
        guestRepository.save(guest);
    }
    @DeleteMapping("/{id}")
    public void deleteGuest(@PathVariable Long id){
        guestRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public void updateGuest(@PathVariable("id") Long id,@RequestBody Guest guest){
        guest.setId(id);
        guestRepository.save(guest);
    }
}
