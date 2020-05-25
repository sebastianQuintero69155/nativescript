import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Place } from "../../model/place";
import { PlaceService } from "../../shared/place.service";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions,
    private placeService:PlaceService) { }
    places: Array<Place>;

  ngOnInit(): void {
    this.placeService.getPlaces()
    .subscribe( (result:any) =>{
      console.log(result);
      this.places = result.places;
    }, (error) => {
      this.alert(error.error.message)
    });
  }

  salir()
  {
    this.routerExtension.navigate(["/login"], {clearHistory: true});
  }

  alert(message:string)
  {
    return alert({
      title: "Ejemplo login" , 
      okButtonText: "ok",
      message: message});
  }

  irCamara()
  {
    this.routerExtension.navigate(["/home/camara"],{});
  }

  irLuminarias()
  {
    this.routerExtension.navigate(["/home/luminaria"],{});
  }
  
  irContolAcces(){
    this.routerExtension.navigate(["/home/controlacces"],{});
  }
}
