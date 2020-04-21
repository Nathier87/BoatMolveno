package com.project.boat.Model;

 ;

 import com.fasterxml.jackson.annotation.JsonIgnore;

 import javax.persistence.*;
 import java.util.ArrayList;
 import java.util.List;

@Entity
public class Boat {
    @Id
    @GeneratedValue
    private Long id;

    private String type;
    private String boatnumber;
    private int numberofseat;
    private int minimumprice;
    private int actualprice;
//    private boolean ontrip;
//    private boolean maintance;
    @OneToMany(mappedBy = "boat")
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public int getMinimumprice() {
        return minimumprice;
    }

    public void setMinimumprice(int minimumprice) {
        this.minimumprice = minimumprice;
    }

    public int getActualprice() {
        return actualprice;
    }

    public void setActualprice(int actualprice) {
        this.actualprice = actualprice;
    }



    public int getNumberofseat() {
        return numberofseat;
    }

    public void setNumberofseat(int numberofseat) {
        this.numberofseat = numberofseat;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBoatnumber() {
        return boatnumber;
    }

    public void setBoatnumber(String boatnumber) {
        this.boatnumber = boatnumber;
    }



//    public boolean isOntrip() {
//        return ontrip;
//    }
//
//    public void setOntrip(boolean ontrip) {
//        this.ontrip = ontrip;
//    }
//
//    public boolean isMaintance() {
//        return maintance;
//    }
//
//    public void setMaintance(boolean maintance) {
//        this.maintance = maintance;
//    }
}
