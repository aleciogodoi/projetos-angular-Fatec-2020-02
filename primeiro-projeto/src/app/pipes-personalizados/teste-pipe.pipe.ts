import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testePipe'
})
export class TestePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
