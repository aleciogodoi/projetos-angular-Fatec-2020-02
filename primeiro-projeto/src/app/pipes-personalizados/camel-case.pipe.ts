import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let values = value.split(' ');
    let resultado = '';
    for (let v of values) {
      resultado += this.primeiraLetaMaiuscula(v)+ ' ';
    }
    return resultado; 
  }

  primeiraLetaMaiuscula(value: string){
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
