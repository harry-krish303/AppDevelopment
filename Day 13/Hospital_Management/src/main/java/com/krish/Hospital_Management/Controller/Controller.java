package com.krish.Hospital_Management.Controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.krish.Hospital_Management.Entity.HospitalEntity;
import com.krish.Hospital_Management.Repository.Repository;




@CrossOrigin("*")
@RestController
@RequestMapping("/HospitalEntity")
public class Controller {

    @Autowired
    private Repository HospitalEntityRepository;
    @GetMapping(value="/get")
    public Iterable<HospitalEntity> getAllHospitalEntity(){
        return HospitalEntityRepository.findAll();
    }
    	
   
    @PostMapping("/post")
    public HospitalEntity createtata(@RequestBody HospitalEntity ad) {
        return HospitalEntityRepository.save(ad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<HospitalEntity>> getById(@PathVariable  Long id){
        Optional<HospitalEntity> ac = HospitalEntityRepository.findById(id);
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
	public HospitalEntity updateHospitalEntityDetails(@RequestBody HospitalEntity b,@PathVariable Long id)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		
		b.setId(id);
		return HospitalEntityRepository.save(b);		
	}
    @DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable Long id)
	{
    	HospitalEntityRepository.deleteById(id);
		return null;
	}
}