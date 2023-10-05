package com.krish.Hospital_Management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krish.Hospital_Management.Entity.HospitalEntity;


public interface Repository extends JpaRepository<HospitalEntity,Long>{

	

	
}