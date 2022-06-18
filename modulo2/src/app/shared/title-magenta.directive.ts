import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleMagenta]'
})
export class TitleMagentaDirective {

  constructor( el: ElementRef ) { 
    el.nativeElement.style.fontSize = '50px';
    el.nativeElement.style.color = '#ac005f';
  }

}
