import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.scss']
})
export class LivrosFormComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Output() onSubmit = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.onSubmit.emit();
  }

}
