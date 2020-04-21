package com.project.boat.Controller;

import com.project.boat.Model.Price;
import com.project.boat.Repositories.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/price")
public class PriceController {
    @Autowired
    private PriceRepository priceRepository;

    @GetMapping
    public List<Price> getPrice(){
        return priceRepository.findAll();
    }

    @PostMapping
    public void addPrice(@RequestBody Price price){

        priceRepository.save(price);
    }

    @DeleteMapping("/{id}")
    public void deletePrice(@PathVariable Long id){
        priceRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public void updatePrice(@PathVariable ("id")Long id,@RequestBody Price price){
        price.setId(id);
        priceRepository.save(price);
    }


}
