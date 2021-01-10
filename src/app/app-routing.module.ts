import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components Angular Routing will need to know about */ 
import { HomeComponent } from './components/home/home.component';
import { RepublicanComponent } from './components/republican/republican.component';
import { DemocratComponent } from './components/democrat/democrat.component';
import { Field2020Component } from './components/field2020/field2020.component';
import { NightOneComponent } from './components/night-one/night-one.component';
import { NightTwoComponent } from './components/night-two/night-two.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

/* Angular Routing - will check in order, first successful path found Angular will route to */ 
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'republican', component: RepublicanComponent},
  {path: 'democrat', component: DemocratComponent},
  {path: 'field2020', component: Field2020Component},
  {path: 'nightOne', component: NightOneComponent},
  {path: 'nightTwo', component: NightTwoComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
