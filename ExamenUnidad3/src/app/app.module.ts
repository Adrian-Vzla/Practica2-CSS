import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnadirContactoComponent } from './componentes/anadir-contacto/anadir-contacto.component';
import { ListaContactosComponent } from './componentes/lista-contactos/lista-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    AnadirContactoComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
