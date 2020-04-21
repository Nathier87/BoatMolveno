package com.project.boat.Model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Reservation {
    @Id
    @GeneratedValue
    private Long id;
    private int numberofperson;
    private LocalDateTime starttime;
    private LocalDateTime endtime;

    @JoinColumn(name="guestid",referencedColumnName="id")
    @ManyToOne
    private Guest guest;
    @JoinColumn(name="boatid",referencedColumnName="id")
    @ManyToOne
    private Boat boat;

    public Guest getGuest() {
        return guest;
    }

    public void setGuest(Guest guest) {
        this.guest = guest;
    }

    public Boat getBoat() {
        return boat;
    }

    public void setBoat(Boat boat) {
        this.boat = boat;
    }

    @JoinColumn(name="boatid",referencedColumnName="id")


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumberofperson() {
        return numberofperson;
    }

    public void setNumberofperson(int numberofperson) {
        this.numberofperson = numberofperson;
    }

    public LocalDateTime getStarttime() {
        return starttime;
    }

    public void setStarttime(LocalDateTime starttime) {
        this.starttime = starttime;
    }

    public LocalDateTime getEndtime() {
        return endtime;
    }

    public void setEndtime(LocalDateTime endtime) {
        this.endtime = endtime;
    }
}
