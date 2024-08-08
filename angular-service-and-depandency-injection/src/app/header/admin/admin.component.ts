import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  // providers:[UserService]
})
export class AdminComponent {

  constructor(@Inject(USER_TOKEN) private userService : UserService){
  }

  name:string = '';
  gender : string = 'Male';
  subType : string = 'Yearly';
  status : string = 'Active';

  createNewUser(){
    this.userService.CreateUsers(this.name,this.gender,this.subType,this.status);

    // console.log(this.userService.users);
  }
}