package com.project.boat.Controller;


import com.project.boat.Model.Boat;
import com.project.boat.Repositories.BoatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/boat")
public class BoatController {
    @Autowired
    private BoatRepository boatRepository;

    @GetMapping
    public List<Boat> getBoats() {
        return boatRepository.findAll();
    }

    @PostMapping
    public String addBoat(@RequestBody Boat boat) {
        Boat existingBoat=boatRepository.findOneByboatnumber(boat.getBoatnumber());
        if(existingBoat!=null){
            return "The boat number"+boat.getBoatnumber()+ "Is already exist.please set new number.";
        }
        boatRepository.save(boat);
        return "Created aboat";
    }


    @DeleteMapping("/{id}")
    public void deleteBoat(@PathVariable Long id){
        boatRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public void updateBoat(@PathVariable  Long id,@RequestBody Boat boat){
        boat.setId(id);
        boatRepository.save(boat);
    }





}
