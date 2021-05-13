import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { Cuerpo2Component } from './componentes/cuerpo2/cuerpo2.component';

const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent},
  { path: 'cuerpo2', component: Cuerpo2Component}
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    Cuerpo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }