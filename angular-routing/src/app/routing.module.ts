import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { PopularComponent } from "./home/popular/popular.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGaurdService } from "./Services/AuthGaurd.service";
import { CanActivate, CanActivateChild, resolve  } from "./auth.gaurd";


const routes : Routes = [
    {path : '', component : HomeComponent},
    // {path: '', redirectTo:'Home', pathMatch : 'full'},
    {path : 'Home', component : HomeComponent},
    {path : 'Contact', component : ContactComponent, canDeactivate : [(comp : ContactComponent) => {return comp.canExit()}]},
    {path : 'About', component : AboutComponent},
    {path : 'Courses', component : CoursesComponent, resolve: {courses: resolve, }},
    // {path : 'Courses/Course/:id', component : CourseDetailComponent},
    {path: 'Courses', canActivateChild: [CanActivateChild], children: [
      {path: 'Course/:id', component: CourseDetailComponent},
      {path:'Popular', component: PopularComponent},
      // {path:'Checkout', component:CheckoutComponent, canActivate: [AuthGaurdService]},
      {path:'Checkout', component:CheckoutComponent,},
    ]},
    {path: 'login', component: LoginComponent}, 
    {path : '**', component : NotFoundComponent}
  ]

  
@NgModule({
    imports : [RouterModule.forRoot(routes, {enableTracing: true})],
    exports : [RouterModule]
})
export class AppRoutingModule { 

}