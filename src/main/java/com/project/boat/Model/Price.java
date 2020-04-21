package com.project.boat.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

public class Price {
    @Id
    @GeneratedValue
    private Long id;
    private int priceperhour;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPriceperhour() {
        return priceperhour;
    }

    public void setPriceperhour(int priceperhour) {
        this.priceperhour = priceperhour;
    }
}
