import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenOdd'
})
export class EvenOddPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value%2>0){
      return "odd";
    }else{
      return "even";
    }
  }

}
