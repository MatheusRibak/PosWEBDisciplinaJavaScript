import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livros } from 'src/app/modules/livros/livros';
import { LivrosService } from 'src/app/modules/livros/services/livros.service';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.scss']
})
export class LivrosListComponent implements OnInit {

  livros$: Observable <Livros[]>
  constructor(
    private livrosService: LivrosService
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.livros$ =  this.livrosService.findAll();
  }

  onDelete(id: string){
    this.livrosService.delete(id).subscribe(
      (response) => {
        console.log(response)
        this.onRefresh()
      }, (error) => {
        console.error(error)
      })
  }

}
