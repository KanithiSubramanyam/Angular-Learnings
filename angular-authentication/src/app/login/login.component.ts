import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../Model/AuthReponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoginMode : boolean = true;
  authService : AuthService = inject(AuthService);

  loginCredentials : string = '';
  loginForm : FormGroup; 
  isLoading : boolean = false;
  errorMessage : string | null = '';
  authObs : Observable<AuthResponse>

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onLoginSubmit(data : FormGroup){
    const email = data.value.email;
    const password = data.value.password;
    console.log(email, password);

    if(this.isLoginMode){

      //loginLogic
      this.authObs = this.authService.login(email, password);
    }
    else{
      this.isLoading = true;
      //signupLogic
      this.authObs = this.authService.signUp(email, password)

    }
    this.authObs.subscribe({
      next : (response) => {
        console.log(response);
        this.isLoading = false;
        this.errorMessage = null;
      },
      error : (error) => {
        this.isLoading = false;
        this.errorMessage = error
        this.hideSnackbar();
      }
    })
    data.reset();
  }

  hideSnackbar(){
    setTimeout(() => {
      this.errorMessage = null;
    }, 2000);  }

}
