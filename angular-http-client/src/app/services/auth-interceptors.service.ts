import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";


export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        
        const modifiedReq = req.clone({headers: req.headers.append('auth', 'xyz')});
        // console.log('AuthInterceptorService - intercept()');
        return next.handle(modifiedReq).pipe(tap((event)=>{
            // console.log(event);
            if(event.type === HttpEventType.Response){
                console.log('response received');
            }
        }));
    }
}