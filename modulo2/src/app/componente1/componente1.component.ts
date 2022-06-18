import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../shared/contador.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
  providers: [ ContadorService ]
})
export class Componente1Component implements OnInit {

  constructor( public contadorService: ContadorService ) { }

  ngOnInit(): void {

  }

  incrementar(){
    this.contadorService.incrementar();
  }

}
