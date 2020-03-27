import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../model/user";
import { LoginService} from "../shared/login.service";
import { setString} from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private routerExtensions: RouterExtensions, private loginService: LoginService) { 
    this.user = new User();
    this.user.email = "squintero69155@umanizales.edu.co";
    this.user.contrasenia = "123456";
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
    .subscribe( (result:any) => {
      console.log(result);
      setString("token", result.token.access_token);
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
