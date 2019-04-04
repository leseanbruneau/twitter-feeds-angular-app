import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* use LocationStrategy and HashLocationStrategy if deployed to web server */
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RepublicanComponent } from './components/republican/republican.component';
import { DemocratComponent } from './components/democrat/democrat.component';
import { Field2020Component } from './components/field2020/field2020.component';
import { TwitterFeedsService } from './services/twitter-feeds.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    RepublicanComponent,
    DemocratComponent,
    Field2020Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TwitterFeedsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
