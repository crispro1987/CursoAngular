import { Injectable } from '@angular/core';
import { ICalculadora } from './icalculadora';


@Injectable({
  providedIn: 'root'
})
export class CalculadoraService implements ICalculadora {

  constructor() { }

  sumar(num1: number, num2: number): number {
    let total: number = 0;
    total = num1 + num2;
    return total;
  }

  restar(num1: number, num2: number): number {
    let total: number = 0;
    total = num1 - num2;
    return total;
  }
}
