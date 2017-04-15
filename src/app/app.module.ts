import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from "./hero-detail.component";
import { HeroService }          from "./hero.service";
import { HeroesComponent }      from "./heroes.component";
import { DashboardComponent }   from "./dashboard.component";
import { AppRoutingModule } from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations:[
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap:[
    AppComponent
  ],
  providers:[
    HeroService
  ]
})


export class AppModule {

}
