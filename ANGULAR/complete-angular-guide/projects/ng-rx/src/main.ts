import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,{
    providers: [provideStore()]
});
