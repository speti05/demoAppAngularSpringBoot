package com.company.registration.repositories;

import com.company.registration.models.UserCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCredentialsRepository extends JpaRepository<UserCredentials, Long> {

    UserCredentials findByUsername(String username);
}
