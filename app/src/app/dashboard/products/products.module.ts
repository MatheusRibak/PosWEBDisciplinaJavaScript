import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ProductModule } from 'src/app/modules/product/product.module';

@NgModule({
  declarations: [ProductsListComponent, ProductsCreateComponent, ProductsUpdateComponent],
  imports: [
    CommonModule,
    ProductModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
