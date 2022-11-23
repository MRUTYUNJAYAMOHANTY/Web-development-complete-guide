import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './TemplateDrivenForm/template-driven/template-driven.component';
import { PracticeTdComponent } from './TemplateDrivenForm/Practicing/practice-td/practice-td.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormComponent } from './ReactiveForm/reactive-form/reactive-form.component';
import { PracticeReactiveComponent } from './ReactiveForm/Practicing/practice-reactive/practice-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    PracticeTdComponent,
    ReactiveFormComponent,
    PracticeReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
