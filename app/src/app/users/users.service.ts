import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint: string = environment.api + '/users';
  constructor(
    private http: HttpClient
  ) { }
  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint);
  }
  findOne(id: string) {
    return this.http.get(this.endpoint + '/' + id);
  }
}
