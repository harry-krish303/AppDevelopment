package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter 
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Table

public class ContactUs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cid;
	  private String firstname;
	  private String lastname;
	  private String mobile;
	  private String query;



}
