import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './home/home.component';
import { CamaraComponent } from '../camara/camara.component';
import { LuminariasComponent } from '../luminarias/luminarias.component';
import { ControlAccesComponent } from '../control-acces/control-acces.component';


@NgModule({
  declarations: [HomeComponent, CamaraComponent, LuminariasComponent, ControlAccesComponent],
  imports: [
    HomeRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
