package com.project.boat.Repositories;




import com.project.boat.Model.Boat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoatRepository extends JpaRepository<Boat,Long> {
    Boat findOneByboatnumber(String boatnumber);

    ;
}
