import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestsManagementComponent } from './requests-management/requests-management.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SectorsComponent } from './sectors/sectors.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    NavbarComponent,
    RequestsManagementComponent,
    SignupComponent,
    SigninComponent,
    SectorsComponent,
    DoctorComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
