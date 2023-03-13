import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { RegisterPayload } from './auth/register-payload';
import { map, Observable } from 'rxjs';
import { LoginPayload } from './auth/login-payload';
import { JwtAutResponse } from './auth/jwt-aut-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url= "http://localhost:8080/";
  constructor(private httpClient: HttpClient) { }
  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpClient.post<RegisterPayload>(`${this.url}api/auth/signup`, registerPayload);
  }
//   login(loginPayload: LoginPayload): Observable<any>{
//  return this.httpClient.post<JwtAutResponse>(`${this.url}api/auth/login`,loginPayload).pipe(map(
//   data =>{
//     return data.username;}
//  ));

//   }

login(loginPayload:LoginPayload) : Observable<any> {
return this.httpClient.post<any>(`${this.url}api/auth/login`,loginPayload);
}

}
