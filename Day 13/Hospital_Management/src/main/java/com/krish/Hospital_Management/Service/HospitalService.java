package com.krish.Hospital_Management.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krish.Hospital_Management.Entity.HospitalEntity;
import com.krish.Hospital_Management.Repository.Repository;




@Service
public class HospitalService {

	@Autowired
	Repository hospitalRepository;
	
	public List<HospitalEntity> getAllHospitalEntity() {
		return hospitalRepository.findAll();
	}
	
	public HospitalEntity getHospitalEntityById(Long HospitalEntityId) {
		Optional<HospitalEntity> HospitalEntityOptional = hospitalRepository.findById(HospitalEntityId);
		return HospitalEntityOptional.orElse(null);
	}
	
	public HospitalEntity saveHospitalEntity(HospitalEntity HospitalEntity) {
		return hospitalRepository.save(HospitalEntity);
	}
	
	public void deleteHospitalEntity(Long HospitalEntityId) {
		hospitalRepository.deleteById(HospitalEntityId);
	}
}