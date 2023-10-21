import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AnalyticsService } from './app/shared/analytics.service';

/*
   From version 14 standalone component used in application . And It is not required to bootstrap appmodule.
   Beacuse root component 'AppComponent' is standalone  
*/
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent
  // {
  // providers: [AnalyticsService]
  // } // This is possible but needed
);