package com.company.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@SpringBootApplication
public class RegistrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistrationApplication.class, args);
	}
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/v1/companies/**")
                	.allowedOrigins("http://localhost:4200")
                	.allowedMethods("GET", "POST", "HEAD", "PUT", "DELETE");
            }
        };
    }
	
	@Configuration
	  @Order(SecurityProperties.BASIC_AUTH_ORDER)//ACCESS_OVERRIDE_ORDER
	  protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	      http
	      .logout().logoutSuccessUrl("/login")
	      .and()
	        .authorizeRequests()
	          .antMatchers("/index.html", "/", "/home", "/login").permitAll()
	          .anyRequest().authenticated();
	    }
	  }
	
	  @Autowired
	  public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
	    auth.inMemoryAuthentication()
	      .withUser("user").password("test").roles("USER")
	    .and()
	      .withUser("manager").password("test").roles("USER", "ADMIN", "READER", "WRITER");
	  }
}