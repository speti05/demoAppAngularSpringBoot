import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule,
  MatMenuModule,
  MatTableModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule } from '@angular/material';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule  } from '@angular/forms';
import { ModifyComponent } from './modify/modify.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    ModifyComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
