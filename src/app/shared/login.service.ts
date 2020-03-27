import { Injectable } from '@angular/core';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "https://urbanoprofundizacion.herokuapp.com/";
  
  constructor(private http: HttpClient) { 

  }

  autenticar(data: any)
  {
    let headers = new HttpHeaders({
      "Content-Type" : "application/json" 
    }); 
    return this.http.post(this.serverUrl + "api/usuario/autenticar", data, {headers: headers});
  }
}
