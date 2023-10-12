package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.ContactUs;

public interface ContactUsRepository extends JpaRepository<ContactUs, String> {

}
