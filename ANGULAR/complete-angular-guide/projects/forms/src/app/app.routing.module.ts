import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PracticeReactiveComponent } from './ReactiveForm/Practicing/practice-reactive/practice-reactive.component';
import { ReactiveFormComponent } from './ReactiveForm/reactive-form/reactive-form.component';
import { PracticeTdComponent } from './TemplateDrivenForm/Practicing/practice-td/practice-td.component';
import { TemplateDrivenComponent } from './TemplateDrivenForm/template-driven/template-driven.component';
const appRoutes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'template-driven', component: TemplateDrivenComponent }, 
  { path: 'practic-td', component: PracticeTdComponent }, 
  { path: 'reactive', component: ReactiveFormComponent }, 
  { path: 'practice-reactive', component: PracticeReactiveComponent }, 
  ];
@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }