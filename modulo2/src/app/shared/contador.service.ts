import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//esto es una clase
export class ContadorService {

  constructor() { }

  //Crear Variable

  public contador: number = 0;

  //Crear Metodo o funcion

  incrementar(){
    this.contador++;
  }
}
