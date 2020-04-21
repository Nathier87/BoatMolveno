package com.project.boat.Repositories;

import com.project.boat.Model.Price;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PriceRepository extends JpaRepository<Price,Long> {
//    List<Price> findAll();
//    Price findId(Long id);

}
