import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Livros } from 'src/app/modules/livros/livros';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LivrosService } from 'src/app/modules/livros/services/livros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livros-update',
  templateUrl: './livros-update.component.html',
  styleUrls: ['./livros-update.component.scss']
})
export class LivrosUpdateComponent implements OnInit {

  livros$: Observable<Livros>;
  livrosForm: FormGroup;
  livrosSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private service: LivrosService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.livrosForm = this.fb.group({
      _id: [],
      descricaoDoLivro:  [],
      autorDoLivro:  [],
      precoDoLivro:  [],
      anoDePublicacaoDoLivro:  [],
      editoraDoLivro:  [],
    })
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.livrosSub = this.service.findOne(params.id)
          .subscribe((livros: Livros) => {
            this.livrosForm.patchValue(livros);
          })
      })
  }

  onSave() {
    let { _id, ...data } = this.livrosForm.value
    console.log(_id)
    console.log(data)
    this.service.update(_id, data).subscribe(
      (response) =>{
        console.table(response)
        this.router.navigate(['/', 'livros'])
      }
    )
    
  }

}
