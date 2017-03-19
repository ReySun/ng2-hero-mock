import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   }, {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   }, {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   }, {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   }
    // ])
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
