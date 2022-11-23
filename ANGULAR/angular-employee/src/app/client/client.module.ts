import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
  declarations: [
    HomeComponent, 
    InvoiceComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule
  ]
})
export class ClientModule { }
