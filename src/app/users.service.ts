import { Injectable } from '@angular/core';
import { Userlist } from './userlist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http : HttpClient) { }

  bioData():Observable<Userlist[]>{
    return this.http.get<Userlist[]>('https://api.github.com/users/octocat/repos');
  }

}


