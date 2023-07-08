import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeadComponent } from './lead/lead.component';

const routes: Routes = [
  {
    path:'', component:MainContentComponent,
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'employees', component:EmployeesComponent
  },
  {
    path:'add-employee', component:AddEmployeeComponent
  },
  {
    path:'lead', component:LeadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
