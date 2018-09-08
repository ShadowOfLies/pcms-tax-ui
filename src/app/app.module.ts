
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from 'app/app-routing.module';

import { HomeComponent, PcmsTaxService, TaxCalculatorComponent } from 'app/pcms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaxCalculatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PcmsTaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
