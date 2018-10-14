import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BikeService } from './services/bike.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ViewBikeDetailsComponent } from './components/view-bike-details/view-bike-details.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewBikeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    BikeService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
