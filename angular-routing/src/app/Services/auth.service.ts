import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";


@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    constructor() { }

    isLogged: Boolean = false;

    userService: UserService = inject((UserService));

    login(username: string, password: string) {

        let User = this.userService.users.find((u) => u.username == username && u.password == password);

        if (User === undefined) {
            this.isLogged = false;
            return undefined;
        } else {
            this.isLogged = true;
            return User;
        }
    }

    logout(){
        this.isLogged = false;
    }

    isAuthenticated() {
        return this.isLogged;
    }
}