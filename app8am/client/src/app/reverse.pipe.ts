import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === true) {
      let result = '';
      for (let i = 0; i < value.length; i++) {
        result = value[i] + result;
      }
      return result;
    }
    else {
      return value;
    }
  }
}
