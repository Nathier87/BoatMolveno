package com.project.boat.Model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Trip {
    @Id
    @GeneratedValue
    private Long id;
    private LocalDateTime starttime;
    private LocalDateTime stoptime;
    private boolean active;
    private double Duration;
    private int numberofperson;
    private int boatnumber;

    public int getBoatnumber() {
        return boatnumber;
    }

    public void setBoatnumber(int boatnumber) {
        this.boatnumber = boatnumber;
    }

    @JoinColumn(name="boatid",referencedColumnName="id")
    @OneToOne
    private Boat boat;

    public double getDuration() {
        return Duration;
    }

    public void setDuration(double duration) {
        Duration = duration;
    }



    public LocalDateTime getStoptime() {
        return stoptime;
    }

    public void setStoptime(LocalDateTime stoptime) {
        this.stoptime = stoptime;
    }




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getStarttime() {
        return starttime;
    }

    public void setStarttime(LocalDateTime starttime) {
        this.starttime = starttime;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public int getNumberofperson() {
        return numberofperson;
    }

    public void setNumberofperson(int numberofperson) {
        this.numberofperson = numberofperson;
    }

    public Boat getBoat() {
        return boat;
    }

    public void setBoat(Boat boat) {
        this.boat = boat;
    }
}
