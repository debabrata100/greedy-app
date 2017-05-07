import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'displayGenres'
})
export class DisplayGeneresPipe implements PipeTransform{

    transform(value: any, exponent: string): string {
        if(!value.length){
            return '';
        }
        return '['+value.map(function(elem){
            return elem.name;
        }).join(",")+']';
    }

}