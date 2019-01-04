import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICompany } from './company-interface';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Company } from './company-model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://localhost:8080/api/v1/companies';
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

  registerCompany (company: Company): Observable<Company> {
    return this.http.post<Company>(this.url, company, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCompany (id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCompanyById(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCompany (id: number, company: Company): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, company, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
