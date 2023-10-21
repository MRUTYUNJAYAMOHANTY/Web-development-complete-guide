import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment as env_receipeshopping } from '../../recipe_shopping-list/src/environments/environment';
// import { AppModule } from './app/app.module'; Not required if we are choosing standalone concept  
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AnalyticsService } from './app/shared/analytics.service';
import { AppRoutingModule } from './app/app-routing.module';

/*
   From version 14 standalone component used in application . And It is not required to bootstrap appmodule.
   Beacuse root component 'AppComponent' is standalone  

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
*/


if (env_receipeshopping.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
  providers: [importProvidersFrom(AppRoutingModule)]
  } // AnalyticsService can be declared in providers array. But not needed
);