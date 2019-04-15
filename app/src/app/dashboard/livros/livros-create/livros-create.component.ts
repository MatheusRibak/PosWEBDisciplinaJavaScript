import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LivrosService } from 'src/app/modules/livros/services/livros.service';

@Component({
  selector: 'app-livros-create',
  templateUrl: './livros-create.component.html',
  styleUrls: ['./livros-create.component.scss']
})
export class LivrosCreateComponent implements OnInit {

  livrosForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private service: LivrosService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.livrosForm = this.fb.group({
      nomeDoLivro: [],
      descricaoDoLivro: [],
      autorDoLivro: [],
      precoDoLivro:[],
      anoDePublicacaoDoLivro: [],
      editoraDoLivro: [],
    })
  }

  ngOnInit() {
  }

  onSave(){
    this.service.create(
      this.livrosForm.value
    ).subscribe(
      (response) => {
        console.log('respostaa: ', response)
        this.router.navigate(['..'],{
          relativeTo: this.route
        })
      }
    )
  }

}
