import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimarynavComponent } from './primarynav/primarynav.component';
import { FooterComponent } from './footer/footer.component';
import { MastheadComponent } from './masthead/masthead.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { MinicartComponent } from './minicart/minicart.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MastheadComponent,
    FooterComponent,
    PrimarynavComponent,
    SearchboxComponent,
    MinicartComponent
  ],
  exports: [
    MastheadComponent,
    FooterComponent,
    PrimarynavComponent,
    SearchboxComponent
  ]
})
export class CoreModule { }
