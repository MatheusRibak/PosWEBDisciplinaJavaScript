import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'      
      },
      {
        path: 'livros',
        loadChildren: './livros/livros.module#LivrosModule'      
      },
      {
        path: '',
        redirectTo: 'users'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
