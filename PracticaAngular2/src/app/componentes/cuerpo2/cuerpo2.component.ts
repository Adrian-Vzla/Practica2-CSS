 import { Component} from '@angular/core';

@Component({
  selector: 'app-cuerpo2',
  templateUrl: './cuerpo2.component.html',
})
export class Cuerpo2Component{
  mostrar = true;

  informacion2 = {
    autor: 'Keanu Reeves',
    frase: 'You´re breathtaking'
  };

  personajes2 = ['Messi','Canelo','Mandalorian'];
}

