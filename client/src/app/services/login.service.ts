import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/requestLogin';
import { RequestRegister } from '../models/requestRegister';

const API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<any>{
    return this.httpClient.post<any>(API + 'login', requestLogin)
  }

  public doRegister(requestRegister: RequestRegister): Observable<any> {
    return this.httpClient.post<any>(API + 'register', requestRegister);
  }
}
