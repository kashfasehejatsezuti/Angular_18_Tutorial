import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cp',
  standalone: true,
})
export class CpPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value != null && value != undefined && value !== '') {
      return value;
    } else {
      return 'NALL';
    }
  }
}
