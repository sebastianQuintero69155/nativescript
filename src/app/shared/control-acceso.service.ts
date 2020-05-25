import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class ControlAccesoService {
  private serverUrl = "https://urbanoprofundizacion.herokuapp.com/";
  constructor(private http: HttpClient) { }

  getAccesos(){
  let headers = this.crearRequestHeader();
    return this.http.get(this.serverUrl + "api/controlacceso", { headers });
  }
  private crearRequestHeader() {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + getString("token"),
      "Content-Type": "application/json",
    });
    return headers;
  }
  
}
