package com.company.registration.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.company.registration.models.Company;
import com.company.registration.repositories.CompanyRepository;

@RestController
@RequestMapping("/api/v1/companies")
public class CompaniesController {
	@Autowired
	private CompanyRepository companyRepository;
	
	@GetMapping
	public List<Company> list() {
		return companyRepository.findAll();
	}
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Company company) {
		companyRepository.save(company);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") long id) {
		companyRepository.deleteById(id);
	}
	
	@GetMapping("/{id}")
	public Company get(@PathVariable("id") long id) {
		return companyRepository.getOne(id);
	}
	
	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Object> put(@RequestBody Company company, @PathVariable("id") long id) {
			Optional<Company> companyOptional = companyRepository.findById(id);

		if (!companyOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		company.setId(id);
		companyRepository.save(company);
		return ResponseEntity.noContent().build();
	}
}
