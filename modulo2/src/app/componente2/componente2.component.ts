import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../shared/contador.service';
import { IUser } from '../shared/iuser';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
  providers: [ ContadorService ]
})
export class Componente2Component implements OnInit {

  usuario: IUser = {
    nombre: 'Cristian',
    apellido: 'Vargas',
    telefono: '973719947'
  };

  constructor( public contadorService: ContadorService ) { }

  ngOnInit(): void {
  }

  incrementar(){
    this.contadorService.incrementar();
  }
}
