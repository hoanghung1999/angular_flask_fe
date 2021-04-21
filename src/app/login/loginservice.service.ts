import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User.model';
import {catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  userReturn;
  apiurl="http://localhost:5000/user/login"
  login(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiurl,user,this.httpOptions);
  }
  constructor(private httpClient:HttpClient) { }
}
