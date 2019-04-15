import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [],
      amount: [],
      weight: []
    })
   }

  ngOnInit() {
  }

  onSave(){
    this.service.create(
      this.productForm.value
    ).subscribe(
      (response) => {
        console.log('resposta: ', response)
        this.router.navigate(['..'], {
          relativeTo: this.route
        })
      }
    )
  }

}
