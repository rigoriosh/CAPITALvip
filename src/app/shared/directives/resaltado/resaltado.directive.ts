import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') miNuevoColor: string;

  constructor(private miElemento: ElementRef) {
    console.log('directiva llamda');
    miElemento.nativeElement.style.backgroundColor = 'yellow';
    miElemento.nativeElement.style.textAlign = 'center';
    this.miNuevoColor = 'black';
   }

   @HostListener('mouseenter') miMouseEntro(): void{
    this.miElemento.nativeElement.style.backgroundColor = this.miNuevoColor || 'green';
   }
   @HostListener('mouseleave') miMouseSalio(): void{
    this.miElemento.nativeElement.style.backgroundColor = 'yellow';
   }
}
