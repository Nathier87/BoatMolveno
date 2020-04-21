package com.project.boat.Controller;

import com.project.boat.Model.Payment;
import com.project.boat.Repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
    @Autowired
    private PaymentRepository paymentRepository;

    @GetMapping
    public List<Payment> getPayment(){
        return paymentRepository.findAll();
    }

    @PostMapping
    public void addPayment(@RequestBody Payment payment){
        paymentRepository.save(payment);
    }

    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable Long id){
        paymentRepository.deleteById(id);;
    }

    @PutMapping("/{id}")
    public void updatePayment(@PathVariable("id") Long id,@RequestBody Payment payment){
        payment.setId(id);
        paymentRepository.save(payment);
    }
}
