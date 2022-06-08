import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { RequestsManagementComponent } from './requests-management/requests-management.component';
import { SectorsComponent } from './sectors/sectors.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"dashbord",component:DashbordComponent},
  {path:"requests",component:RequestsManagementComponent},
  {path:"sector",component:SectorsComponent},
  {path:"hospital",component:HospitalComponent},
  {path:"doctor",component:DoctorComponent},
  {path:"signup",component:SignupComponent},
  {path:"",component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
