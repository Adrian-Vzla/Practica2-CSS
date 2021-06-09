import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-anadir-contacto',
  templateUrl: './anadir-contacto.component.html',
  styleUrls: ['./anadir-contacto.component.css']
})
export class AnadirContactoComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      descripcion: [''],
      sexo: [''],
      empresa: [''],
      email: [''],
      telefono: [''],
    });
  }
  
  guardar(){
    console.log(this.formulario.value);
  }   
}
