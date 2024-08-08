import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService{

    // createTask: EventEmitter<string> = new EventEmitter<string>();

    // instead of using EventEmitter we are using subject
    createTask = new Subject<string>();


    // onCreateTask (val:string){
    //     this.createTask.emit(val);
    // }

    
    onCreateTask (val:string){
        this.createTask.next(val);
    }
}