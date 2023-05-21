import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "http://127.0.0.1:8000/api";
  private token = "";
  datos:any = {};

  constructor(private _httpClient: HttpClient, private _authService: AuthService) {
    /* this.datos = this._authService.login()
    console.log("DATA LOGIN");
    console.log(this.datos);
    this.token = this.datos.access_token; */
  }

  getUsuarios(): Observable<any> {
    /* console.log("TOKEN");
    console.log(this.token); */
    /* const headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`}); */
    return this._httpClient.get(
      `${this.url}/usuario`
    );
  }

}

