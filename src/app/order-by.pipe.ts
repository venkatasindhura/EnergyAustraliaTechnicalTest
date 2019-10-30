import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: true
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, property: string) {
    return value.sort((a, b) => a.band.localeCompare(b.band));
  }

}
