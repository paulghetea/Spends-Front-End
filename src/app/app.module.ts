import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendsComponent } from './pages/spends/spends.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PaymentsComponent } from './pages/spends/payments/payments.component';
import { CommonModule } from '@angular/common';
import { MinusPipe } from './pipes/minus.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SpendsComponent,
    HomeComponent,
    NavbarComponent,
    PaymentsComponent,
    MinusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
