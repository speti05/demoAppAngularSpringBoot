import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from '../company/company.service';
import { Observable } from 'rxjs';
import { Company } from '../company/company-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  companyForm: FormGroup;
  validMessage: string = "";
  selectedCompany: Company;
  ready: boolean;//fixes rendering error
  constructor(private companyService: CompanyService, private route: ActivatedRoute) {  }


  ngOnInit() {
    this.getSelectedCompany();
  };

  private getSelectedCompany(){
    this.companyService.getCompanyById(this.route.snapshot.params.id).subscribe(
      data => {
        console.log('inarrow <Company>data: ',<Company>data);
        this.selectedCompany = <Company>data;
        this.companyForm = new FormGroup({
          name: new FormControl(this.selectedCompany.name, Validators.required),
          email: new FormControl(this.selectedCompany.email, Validators.required),
          site: new FormControl(this.selectedCompany.site, Validators.required),
          phone: new FormControl(this.selectedCompany.phone, Validators.required)
        });
        this.ready = true;
      },
      errors => this.validMessage = <any>errors
      )
  }
  

  submitForm() {
    if (this.companyForm.valid){
      this.companyService.updateCompany(this.selectedCompany.id, this.companyForm.value)
      .subscribe(
        data => {
          this.companyForm.reset();
          this.validMessage = this.selectedCompany.name + " has been modified";
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
