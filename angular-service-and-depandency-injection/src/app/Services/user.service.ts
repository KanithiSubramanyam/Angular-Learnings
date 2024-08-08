import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./Logger.service";

@Injectable()    

export class UserService{
    users : User[] = [
        new User("Kanithi","Male","Monthly","Active"),
        new User("Raj","Male","Monthly","Active"),
        new User("Ram","Female","Monthly","Active"),
        new User("Rajesh","Male","Monthly","Active"),
        new User("Ramesh","Female","Monthly","Active"),
    ];

    constructor(private logger : LoggerService){

    }
    
    //creating an event that userdetials clicked
    onUserDetailsClicked : EventEmitter<User> = new EventEmitter<User>();

    //who ever calls this on show user details we have to pass the userdetails
    OnShowUserDetails(user:User){
        this.onUserDetailsClicked.emit(user);
    }

    getAllUsers(){
        return this.users;
    }

    CreateUsers(name : string, gender : string, subType : string, status : string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);

        //let logger = new LoggerService();
        this.logger.logMessage(name,status);

    } 
} 