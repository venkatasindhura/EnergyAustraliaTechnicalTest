import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
  transform(collection: Array<any>, property: string): Array<any> {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }

    // sort first
    function compareOnKey(key: any) {
      // tslint:disable-next-line: only-arrow-functions
      return function(a: any, b: any) {
        a = a[key];
        b = b[key];
        if (a < b) { return -1; }
        if (a > b) { return 1; }

        return 0;
      };
    }
    collection.sort(compareOnKey('labelName'));

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});

    console.log(groupedCollection);
    // this will return an array of objects, each object containing a group of objects in sorted ord
    return Object.keys(groupedCollection).
                  map(key => ({ key, value: groupedCollection[key] }));
  }
}
