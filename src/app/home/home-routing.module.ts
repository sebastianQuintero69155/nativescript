import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { CamaraComponent } from "../camara/camara.component";
import { LuminariasComponent } from "../luminarias/luminarias.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "camara", component: CamaraComponent },
  { path: "luminaria", component: LuminariasComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
