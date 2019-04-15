import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LivrosFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    LivrosFormComponent
  ]
})
export class LivrosModule { }
