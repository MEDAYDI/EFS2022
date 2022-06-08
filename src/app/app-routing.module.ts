import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RequestsManagementComponent } from './requests-management/requests-management.component';

const routes: Routes = [
  {path:"",component:DashbordComponent},
  {path:"requestsManegement",component:RequestsManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
