import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../shared/calculadora.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public calculadora: CalculadoraService ) { }

  ngOnInit(): void {
    console.log(this.sumar(1,3))
  }

  sumar(num1: number, num2: number){
    return this.calculadora.sumar(num1,num2);
  }

}
