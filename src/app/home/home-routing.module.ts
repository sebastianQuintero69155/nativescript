import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { CamaraComponent } from "../camara/camara.component";
import { LuminariasComponent } from "../luminarias/luminarias.component";
import { ControlAccesComponent } from "../control-acces/control-acces.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "camara", component: CamaraComponent },
  { path: "luminaria", component: LuminariasComponent },
  { path: "controlacces", component: ControlAccesComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
