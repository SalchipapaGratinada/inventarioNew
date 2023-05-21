import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  private url = "http://127.0.0.1:8000/api";
  private token = "";
  datos:any = {};


  constructor(private _httpClient: HttpClient, private _authService: AuthService) {
    /* this.datos = this._authService.login()
    console.log("DATA LOGIN");
    console.log(this.datos);
    this.token = this.datos.access_token; */
  }

  getInmuebles(): Observable<any> {
    /* console.log("TOKEN");
    console.log(this.token); */
    /* const headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`}); */
    return this._httpClient.get(
      `${this.url}/inmueble`
    );
  }
}
