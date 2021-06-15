import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'Search'
})
export class SearchPipe implements PipeTransform {
    transform(value, sortBy: string) {
        sortBy = sortBy ? sortBy.toLowerCase() : null;

        return sortBy ? value.filter ((listing) => {
           return listing.name.toLocaleLowerCase().indexOf(sortBy) !== -1
        }) : value;
    }
}