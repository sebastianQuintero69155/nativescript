import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: "root",
})
export class LuminariaService {
  private urlAPIRasberryJuan = "https://pottiest-platypus-0746.dataplicity.io/";
  private urlAPIRasberrySebas = "https://unabashed-cockroach-6510.dataplicity.io/";

  constructor(private http: HttpClient, ) {}

  postLuminaria1(data: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(this.urlAPIRasberryJuan + "led/red/", data, {
      headers: headers,
    });
  }

  postLuminaria2(data: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(this.urlAPIRasberryJuan + "led/green/", data, {
      headers: headers,
    });
  }

  postLuminaria3(data: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(this.urlAPIRasberrySebas + "led/red/", data, {
      headers: headers,
    });
  }

  postLuminaria4(data: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(this.urlAPIRasberrySebas + "led/green/", data, {
      headers: headers,
    });
  }
 
}
