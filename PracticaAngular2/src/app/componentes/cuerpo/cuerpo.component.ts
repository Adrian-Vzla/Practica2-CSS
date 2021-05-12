import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent{
  mostrar = true;

  informacion = {
    autor: 'Cristiano Ronaldo',
    frase: 'SIIIIUUUUU'
  };

  personajes = ['Chabelo','Babo','Goku'];
}