import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from '../livros';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private endpoint: string = environment.api + '/livros'
  
  constructor(
    private http: HttpClient
  ) { }

  findOne(id: string): Observable<Livros>{
    return this.http.get<Livros>(this.endpoint + '/' + id) 
    .pipe(take(1))
  }

  findAll(): Observable<Livros[]>{
    return this.http.get<Livros[]>(this.endpoint)
  }


  create(livros: Livros){
    return this.http.post(this.endpoint, livros)
    .pipe(take(1))
  }

  update(id: string, livros: Livros){
    return this.http.put(this.endpoint + '/' + id, livros)
    .pipe(take(1))
  }

  delete(id: string){
    return this.http.delete(this.endpoint + '/' +id)
    .pipe(take(1))
  }
}
