import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation';
import { PrestationInterface } from '../interface/prestation-interface';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  // {{ item | total:true }}
  transform(value: PrestationInterface, args?: boolean): any {
    if (!value) {
      return '';
    }
    return ( args ? value.totalTTC() : value.totalHT());
  }

}
