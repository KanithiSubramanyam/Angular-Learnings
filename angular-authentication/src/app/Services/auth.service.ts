import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../Model/AuthReponse";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService   {

    http : HttpClient = inject(HttpClient);
    error : string = '';
    signUp(email, password ){
        const data = {
            email : email,
            password : password,
            returnSecureToken: true
        }

       return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwVQlYXpYf2AAZ50bsunrXT_LVFONfdMs', data)
       .pipe(
        catchError(this.handleError)
        );
    }
    login(email, password){
        const data = {
            email : email,
            password : password,
            returnSecureToken: true
        }
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwVQlYXpYf2AAZ50bsunrXT_LVFONfdMs', data)
    .pipe(
        catchError(this.handleError)
        );
    }

    private handleError(error){
        
            let errorMessage = 'An unknown error occurred';
            if(!error.error || !error.error.error){
                return throwError( ()=>errorMessage)
            }
            console.log(error.error.error.message);
            switch(error.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = 'Email already exists';
                    break;
                case 'INVALID_LOGIN_CREDENTIALS':
                    errorMessage = 'Invalid Email / Password ';
                    break;
                default:
                    errorMessage = 'An unknown error occurred';
                    break;
            }
            return throwError( ()=>errorMessage)
    }
}