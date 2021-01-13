import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    value = value.toLocaleLowerCase();
    console.log(value);
    let nombres = value.split(' ');
    console.log(nombres);
    if (args[0]) {
      nombres = nombres.map(n => n[0].toUpperCase() + n.substr(1));
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }

}
