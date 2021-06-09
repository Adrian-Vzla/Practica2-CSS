import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contacto, ContactosService } from 'src/app/servicios/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  contactos: Array<Contacto>=[]
  formulario: FormGroup;

  constructor(private servicioContactos: ContactosService, private fb:FormBuilder) {
    this.contactos = this.servicioContactos.getContactos();
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
