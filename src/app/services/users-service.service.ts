import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API = 'https://randomuser.me/api/?results=20';

  constructor(private httpClient: HttpClient) { }

  obteneListaUsuarios(): Observable<User> {
    return this.httpClient.get<User>(this.API);
  }

}
