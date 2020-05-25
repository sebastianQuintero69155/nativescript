import { Component, OnInit } from "@angular/core";
import { LuminariaService } from "../shared/luminaria.service";
import { EventData } from 'tns-core-modules/data/observable';
import { Switch } from "tns-core-modules/ui/switch";

@Component({
  selector: "ns-luminarias",
  templateUrl: "./luminarias.component.html",
  styleUrls: ["./luminarias.component.css"],
})
export class LuminariasComponent implements OnInit {
  public state: string;
  public luzUno: boolean;
  public message: string = "";

  constructor(private luminariaService: LuminariaService) {}

  ngOnInit(): void {}

  LuminariaUnoEncender(args: EventData) {
    let sw = args.object as Switch;
    let isChecked = sw.checked; 
    if (isChecked) {
     
      this.luminariaService.postLuminaria1({ state: 1 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    } else {
      this.luminariaService.postLuminaria1({ state: 0 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    }
  }
  LuminariaDosEncender(args: EventData) {
    let sw = args.object as Switch;
    let isChecked = sw.checked; 
    if (isChecked) {
     
      this.luminariaService.postLuminaria2({ state: 1 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    } else {
      this.luminariaService.postLuminaria2({ state: 0 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    }
  }
  LuminariaTresEncender(args: EventData) {
    let sw = args.object as Switch;
    let isChecked = sw.checked; 
    if (isChecked) {
     
      this.luminariaService.postLuminaria3({ state: 1 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    } else {
      this.luminariaService.postLuminaria3({ state: 0 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    }
  }
  LuminariaCuatroEncender(args: EventData) {
    let sw = args.object as Switch;
    let isChecked = sw.checked; 
    if (isChecked) {
     
      this.luminariaService.postLuminaria4({ state: 1 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    } else {
      this.luminariaService.postLuminaria4({ state: 0 }).subscribe((res) => {
        this.message = (<any>res).json.data.state;
      });
    }
  }
  
}
