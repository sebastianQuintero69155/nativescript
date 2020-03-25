import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../model/user";
import { LoginService} from "../shared/login.service";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private routerExtensions: RouterExtensions, private loginService: LoginService) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  ingresar()
  {
    if(!this.user.email)
    {
      this.alert("Debe ingresar un correo");
      return;
    }

    if(!this.user.contrasenia)
    {
      this.alert("Debe ingresar una contraseña");
      return;
    }

    this.loginService.autenticar({email: this.user.email, password: this.user.contrasenia })
    .subscribe( (result) => {
      this.routerExtensions.navigate(["/home"], {clearHistory: true});
    }, (error) =>{
  
      this.alert(error.error.message);
    });
  }

  alert(message:string)
  {
    return alert({
      title: "Ejemplo login" , 
      okButtonText: "ok",
      message: message});
  }

}
