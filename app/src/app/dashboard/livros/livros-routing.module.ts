import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosListComponent } from './livros-list/livros-list.component';
import { LivrosCreateComponent } from './livros-create/livros-create.component';
import { LivrosUpdateComponent } from './livros-update/livros-update.component';

const routes: Routes = [{
  path: '',
  component: LivrosListComponent
},
{
  path: 'create',
  component: LivrosCreateComponent
},{
  path: 'update/:id',
  component: LivrosUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
