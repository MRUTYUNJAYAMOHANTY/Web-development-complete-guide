import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './client/home/home.component';

import { InvoiceComponent } from './client/invoice/invoice.component';
import { NewRequirementComponent } from './new-requirement/new-requirement.component';  

export const mypage: Routes = [
  
  { path: "invoice", component: InvoiceComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "home", component: HomeComponent },

  { path: "PostRequirement", component: NewRequirementComponent },

];