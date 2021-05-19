import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  personajes = ['Chabelo','Babo','Goku', 'Otro personaje'];

  constructor() { }

  leerPersonajes(){
    return this.personajes;
  }

}
