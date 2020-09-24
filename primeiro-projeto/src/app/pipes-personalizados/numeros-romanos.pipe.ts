import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numerosRomanos'
})
export class NumerosRomanosPipe implements PipeTransform {

  numero: number;
  algarismoArabicos: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  algarismosRomanos: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  transform(value: any, ...args: any[]): any {
    let resultado: string = "";
    if (this.validaNumero(value) != 0) {
      for (let i= 0; i < 13; i++) {
        while ( this.numero >= this.algarismoArabicos[i] ) {
          this.numero -= this.algarismoArabicos[i];
          resultado += this.algarismosRomanos[i];
        }
      }
    }
    return resultado;
  }

  validaNumero(value) {
    if (typeof Number(value) ) {
      this.numero = parseInt(value);
      if (this.numero > 0 && this.numero < 4000)
        return this.numero;
      else
       return 0;
    }
    else
      return 0;
  }

}
