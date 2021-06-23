import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'https://api-pw-ith.herokuapp.com/api/usuarios/18330509';

  constructor( private http: HttpClient) { }

  public getUsuario() {

    return this.http.get( this.apiUrl )

  }
}
