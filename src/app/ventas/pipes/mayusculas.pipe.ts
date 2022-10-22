import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name:'mayusculas'
})


export class MayusculasPipe implements PipeTransform{
    transform(value: string, mayusculasPipe: boolean = true): string {
        // if(minisculasPipe){
        //     return value.toLocaleUpperCase()
        // }else{
        // return value.toLocaleLowerCase()
        // }
        return (mayusculasPipe) ? value.toUpperCase() : value.toLowerCase()
    }
}