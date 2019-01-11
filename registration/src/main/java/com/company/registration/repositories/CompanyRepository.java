package com.company.registration.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.registration.models.Company;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

}
