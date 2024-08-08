import { inject } from "@angular/core"
import { AuthenticationService } from "./Services/auth.service"
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";


export const CanActivate = ( ) => {

    const authService : AuthenticationService = inject(AuthenticationService);

    const routes : Router = inject(Router);

    if(authService.isAuthenticated()){
        return true;
    }
    else{
        routes.navigate(['login']);
        return false;
    }
}

export const CanActivateChild = ( ) => {

   return CanActivate()
}


export const resolve = ( ) => {

    const courseService = inject(CourseService);

    return courseService.getAllcourses()
}