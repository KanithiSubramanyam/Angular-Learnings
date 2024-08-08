import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthenticationService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('username') username : ElementRef ;
  @ViewChild('password') password : ElementRef ;

  authService : AuthenticationService = inject(AuthenticationService);
  router : Router = inject(Router);
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() : void{
    this.activatedRoute.queryParamMap.subscribe( (queries)=>{
     const logout = Boolean( queries.get('logout'));

     if(logout){
       this.authService.logout();
       alert("You have been logged out");
      //  this.router.navigate(['/']);
     }
    })
  }
  onLogin(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);
    

    console.log(user);
    if(user === undefined){
      alert("Login failed");
    }
    else{
      alert("Login successful " + user.name + ' Successfully logged in');
      this.router.navigate(['/Courses'])

    }

  }
}
