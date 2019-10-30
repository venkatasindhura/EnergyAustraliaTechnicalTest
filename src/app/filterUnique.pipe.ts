import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filterUnique',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // Remove the duplicate elements
        // tslint:disable-next-line: prefer-const
        let band = value.map(x=>{
            // tslint:disable-next-line: arrow-return-shorthand
            return x.Festivals.map( y => { return y.value; } );
        }).reduce((acc: any, ele: any, i: any) => {
            acc = acc.concat(ele);
            return acc;
        });
        return new Set(band);
    }
}
