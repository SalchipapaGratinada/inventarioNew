import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url = "http://127.0.0.1:8000/api";
private email = "dlasuncion30@gmail.com";
private password = "1234";

constructor(private _httpClient: HttpClient) { }

  login(): Observable<any> {
    const data = {email:this.email, password:this.password};
    return this._httpClient.post(
      `${this.url}/auth/login`, data
    );
  }
  
}
