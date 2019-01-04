import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { ICompany } from '../company/company-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  companies: ICompany[];
  //filteredCompanies: ICompany[];
  message = "";
  deletedCompanies: string = "";
  displayedColumns: string[] = ['name', 'email', 'site', 'phone', 'id'];
  showTable: boolean;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getcompanies();
/*     if(this.companies.length < 1) {
      this.showTable = false;
    } */
  }
  
  getcompanies() {
    this.showTable = false;
    this.companyService.getCompanies().subscribe(
      companies => {
        this.companies = companies,
        this.showTable = true;
        //this.filteredCompanies = this.companies
      },
      errors => this.message = <any>errors
      );
  }
  
  deleteCompany (company) {
    this.companyService.deleteCompany(company.id).subscribe();
    this.deletedCompanies = this.deletedCompanies + ", " + company.name;
    this.message = "Deleted Companies:" + this.deletedCompanies;
    delete this.companies;
    this.getcompanies();
  }
}
