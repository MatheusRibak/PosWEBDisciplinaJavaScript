import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Output() onSubmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.onSubmit.emit();
  }

  

}
