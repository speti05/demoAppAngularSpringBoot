import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'company-app';
  isAuthenticated = this.loginService.authenticated;
  
  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) {
/*     this.loginService.authenticate(undefined, undefined);
    console.log("cOMPENT ISAUTHENTICATED?",this.isAuthenticated); */
  }
  
  logout() {
    this.http.post('logout', {}).pipe( finalize(() => {
        this.loginService.authenticated = false;
        this.router.navigateByUrl('/login');
    })).subscribe();
  }
 
}
