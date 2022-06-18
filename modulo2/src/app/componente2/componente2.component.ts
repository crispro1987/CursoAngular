import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../shared/contador.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
  providers: [ ContadorService ]
})
export class Componente2Component implements OnInit {

  constructor( public contadorService: ContadorService ) { }

  ngOnInit(): void {
  }

  incrementar(){
    this.contadorService.incrementar();
  }
}
