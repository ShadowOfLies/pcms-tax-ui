import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  TaxCalculatorComponent
} from 'app/pcms';

const routes: Routes = [
  { path: 'pcms', children : [
    { path: 'home', component: HomeComponent },
    { path: 'tax', component: TaxCalculatorComponent }
  ]},
  // otherwise redirect to home
  { path: '**', redirectTo: 'pcms/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
