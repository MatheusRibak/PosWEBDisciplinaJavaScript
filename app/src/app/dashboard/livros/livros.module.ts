import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosCreateComponent } from './livros-create/livros-create.component';
import { LivrosUpdateComponent } from './livros-update/livros-update.component';
import { LivrosListComponent } from './livros-list/livros-list.component';
import { LivrosModule  as alias} from 'src/app/modules/livros/livros.module';

@NgModule({
  declarations: [LivrosCreateComponent, LivrosUpdateComponent, LivrosListComponent],
  imports: [
    CommonModule,
    alias,
    LivrosRoutingModule
  ]
})
export class LivrosModule { }
