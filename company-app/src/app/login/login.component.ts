import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  credentials = {username: '', password: ''};

  login() {
    this.loginService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }
}
