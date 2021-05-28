import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formulario: FormGroup;

  constructor( private fb: FormBuilder) {
    this.crearFormulario();
    this.cargarDataFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', Validators.required]
    });
  }

  cargarDataFormulario(){
    this.formulario.setValue({
      nombre: 'Jesus',
      apellido: 'Valenzuela',
      correo: 'adrian@gmail.com'
    })
  }

  guardar(){
    if(this.formulario.valid){
      console.log( this.formulario.value );
    } else {
      console.log('Su formulario no es valido');
    }
    
  }

}
