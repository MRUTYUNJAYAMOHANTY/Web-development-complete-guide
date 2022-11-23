import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { mypage } from './routing';  //seprate routing
import { ClientModule } from './client/client.module';
import { NewRequirementComponent } from './new-requirement/new-requirement.component';  

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    TopnavComponent,
    DashboardComponent,
    NewRequirementComponent
  ],
  imports: [
    BrowserModule,

    ClientModule, RouterModule.forRoot(mypage),
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
