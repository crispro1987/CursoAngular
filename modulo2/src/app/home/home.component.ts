import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculadoraService } from '../shared/calculadora.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  observable = new Observable(subscriber => {
    subscriber.next('Hola 1');
    subscriber.next('Hola 2');
    subscriber.next('Hola 3');
  })

  constructor( public calculadora: CalculadoraService ) { }

  ngOnInit(): void {
    console.log(this.sumar(1,3))
  }

  sumar(num1: number, num2: number){
    return this.calculadora.sumar(num1,num2);
  }

}
