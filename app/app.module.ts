import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';

// resolve  404 Error when refresh After switch router
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule
  ],

  declarations: [
      AppComponent,
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent
  ],

  providers: [
    HeroService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
