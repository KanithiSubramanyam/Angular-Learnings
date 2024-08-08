import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {

    
    transform(list : Student[], filterText : string){
        console.log("filter called")

        if(filterText.toLowerCase() === 'all' || list.length === 0 || filterText === null || filterText === '') 
            return list;
        else
            return list.filter(x => x.gender.toLowerCase() === filterText.toLowerCase());
    }
   

}