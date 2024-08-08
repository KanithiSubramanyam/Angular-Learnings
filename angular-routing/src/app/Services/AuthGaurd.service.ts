import { inject, Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild, UrlTree, CanDeactivate, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";
import { Course } from "../Models/course";
import { CourseService } from "./course.service";


export interface IDeactivateComponent {
    canExit: () => boolean | Observable<boolean> | Promise<boolean>
}



@Injectable({
    providedIn : 'root',
})
export class AuthGaurdService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>, Resolve<Course[]>{

    authService : AuthenticationService = inject(AuthenticationService);
    router : Router = inject(Router)
    courseService  : CourseService = inject(CourseService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):

    
    boolean | Observable<boolean> | Promise<boolean> {

        if(this.authService.isAuthenticated()){
            return true;
        } 
        else{
            this.router.navigate(['/login']) ;
            return false;
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(childRoute, state); 
    }


    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // alert('can not navigate without saving');
        // return false;

        return component.canExit();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> | Promise<Course[]> | Course[] {
        // let courseList: Course[] = [];
        // this.courseService.getAllcourses().subscribe( (courses)=>{
        //     courseList = courses;
        // });
        // return courseList;

        return this.courseService.getAllcourses()
    }
    
}