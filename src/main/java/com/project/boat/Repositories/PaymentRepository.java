package com.project.boat.Repositories;

import com.project.boat.Model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment,Long> {
//    List<Payment> findAll();
//    Payment findId(Long id);
}
