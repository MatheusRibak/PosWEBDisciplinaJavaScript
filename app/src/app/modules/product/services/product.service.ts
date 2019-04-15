import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private endpoint: string = environment.api + '/products'


  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.endpoint)
  }

  findOne(id: string): Observable<Product>{
    return this.http.get<Product>(this.endpoint + '/' + id)
    .pipe(take(1))
  }

  create(product: Product){
    return this.http.post(this.endpoint, product)
    .pipe(take(1))
  }

  update(id: string, product: Product){
    return this.http.put(this.endpoint + '/' + id, product)
    .pipe(take(1))
  }

  delete(id: string){
    return this.http.delete(this.endpoint + '/' +id)
    .pipe(take(1))
  }
}
