import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProductModule } from '../modules/product/product.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [
    CommonModule,
    ProductModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
