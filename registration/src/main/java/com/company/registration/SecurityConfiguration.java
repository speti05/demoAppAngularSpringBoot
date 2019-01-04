//package com.company.registration;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//	    http
//        .authorizeRequests().antMatchers("/login", "index.html", "/").permitAll().anyRequest().authenticated().and().formLogin().loginPage("/login").isCustomLoginPage();
//	}
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.inMemoryAuthentication().withUser("user").password("test").roles("USER");
//	}
	
	
//OLD CONF	
	
//	@Bean
//  public WebMvcConfigurer corsConfigurer() {
//      return new WebMvcConfigurerAdapter() {
//          @Override
//          public void addCorsMappings(CorsRegistry registry) {
//              registry.addMapping("/**")
//              	
//              	.allowedMethods("GET", "POST", "HEAD", "PUT", "DELETE");
//          }
//      };
//  }
//	
//	@Configuration
//	@EnableWebSecurity
//	  @Order(SecurityProperties.BASIC_AUTH_ORDER)//ACCESS_OVERRIDE_ORDER
//	  protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//	    @Override
//	    protected void configure(HttpSecurity http) throws Exception {
//	      http.cors().and()
//	      .logout().logoutSuccessUrl("/login")
//	      .and()
//	        .authorizeRequests()
//	          .antMatchers("/index.html", "/", /*"/home", */ "/login").permitAll()
//	          .anyRequest().authenticated();
//	    }
//
//		@Override
//		protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//			auth.inMemoryAuthentication().withUser("user").password("test").roles("USER");
//		}
//	  }
	
	
	
//	  @Autowired
//	  public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
//	    auth.inMemoryAuthentication()
//	      .withUser("user").password("test").roles("USER")
//	    .and()
//	      .withUser("manager").password("test").roles("USER", "ADMIN", "READER", "WRITER");
//	  }
//}
