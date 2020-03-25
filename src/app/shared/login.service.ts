import { Injectable } from '@angular/core';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "https://urbanoprofundizacion.herokuapp.com/";
  private token:string;

  constructor(private http: HttpClient) { 

  }

  private crearRequestHeader(){
    let headers = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
      "Content-Type" : "application/json" 
    }); 
    return headers;
  }

  autenticar(data: any)
  {
    let headers = new HttpHeaders({
      "Content-Type" : "application/json" 
    }); 
    return this.http.post(this.serverUrl + "api/usuario/autenticar", data, {headers: headers});
  }


/*getPlaces(){
    this.token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGU0N2NlMjE4ZjI3YjAwMTc5OTc3YzkiLCJpYXQiOjE1ODUwMTUzNzMsImV4cCI6MTU4NTEwMTc3M30.C7xbOb7UmDl2q4zGabsJTjBxQvXNcYYa02CsZw-8Tjw";
    let headers = this.crearRequestHeader();
    return this. http.get(this.serverUrl + "api/places", {headers});
  }
*/
  
}
