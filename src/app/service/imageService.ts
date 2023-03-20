import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../model/Profile";
import {Account} from "../model/Account";

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private sever="http://localhost:8080";

  constructor(private http:HttpClient) { }

  uploadImage(image: File): Observable<any>{
    const formData = new FormData();

    formData.append('fileImg', image);
    return  this.http.post<any>(`${this.sever}/user/upImg`, formData)
  }
  public creatProfile(profile: Profile ):Observable<any>{
    return this.http.post<any>(`${this.sever}/user`, profile)
  }
  public newFeed():Observable<Profile[]>{
    return this.http.get<Profile[]>(`${this.sever}/user`);
  }
}
