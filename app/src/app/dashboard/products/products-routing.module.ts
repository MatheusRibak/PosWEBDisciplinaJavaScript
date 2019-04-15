import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';

const routes: Routes = [{
  path: '',
  component: ProductsListComponent
},
{
  path: 'create',
  component: ProductsCreateComponent
},{
  path: 'update/:id',
  component: ProductsUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
