import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTexto'
})
export class RecortarTextoPipe implements PipeTransform {

  transform(value: string, limit: number = 20): unknown {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
