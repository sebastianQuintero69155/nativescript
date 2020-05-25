import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ControlAccesoService } from '../shared/control-acceso.service';
import { ControlAcceso } from '../model/controlacceso';

@Component({
  selector: 'ns-control-acces',
  templateUrl: './control-acces.component.html',
  styleUrls: ['./control-acces.component.css']
})
export class ControlAccesComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions, private controlAccesoService: ControlAccesoService) { }
  accesos: Array<ControlAcceso>

  ngOnInit(): void {
    this.controlAccesoService.getAccesos()
    .subscribe( (result:any) =>{
      console.log(result);
      this.accesos = result.ControlAccesos;
    }, (error) => {
      this.alert(error.error.message)
    });
  }
  alert(message:string)
  {
    return alert({
      title: "acceso" , 
      okButtonText: "ok",
      message: message});
  }
  salir()
  {
    this.routerExtension.navigate(["/home/"], {clearHistory: true});
  }

}
