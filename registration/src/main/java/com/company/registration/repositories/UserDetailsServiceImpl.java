package com.company.registration.repositories;

import com.company.registration.models.UserCredentials;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component("CustomUserDetails")
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserCredentialsRepository userCredentialsRepository;
    public UserDetailsServiceImpl(UserCredentialsRepository userCredentialsRepository)
    {
        this.userCredentialsRepository = userCredentialsRepository ;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserCredentials userCredentials = userCredentialsRepository.findByUsername(username);

        GrantedAuthority authority = new SimpleGrantedAuthority(userCredentials.getRole());

        return new User(userCredentials.getUsername(),userCredentials.getPassword(), Arrays.asList(authority));
    }
}
