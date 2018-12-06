package com.company.registration.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.registration.models.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}
