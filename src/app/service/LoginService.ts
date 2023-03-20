import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserToken} from "../model/UserToken";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(user: any): Observable<UserToken>{
    return this.http.post<UserToken>("http://localhost:8080/login",user);
  }
  register(user: any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/register",user);
  }

  setToken(token: string){
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }
  setUserToken(userToken: UserToken){
    localStorage.setItem("userToken",JSON.stringify(userToken));
  }

  getUserToken(): UserToken{
    return JSON.parse(<string>localStorage.getItem("userToken"));
  }
  myProfile(id:number):Observable<any>{
   return  this.http.get<any>(`http://localhost:8080/user/myProfile/${id}`)
  }
}
