import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from '../company/company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  companyForm: FormGroup;
  validMessage: string = "";

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      site: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  submitForm() {
    if (this.companyForm.valid){
      this.companyService.registerCompany(this.companyForm.value)
      .subscribe(
        data => {
          this.companyForm.reset();
          this.validMessage = "Company has been registered";
          return true;
        },
        error => {
          this.validMessage = "Something went wrong...";
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = "Please fill every required fields!";
    }
   
  }
}
