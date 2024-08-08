import { Component, inject, OnInit } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  selectUser : User ;
  userService = inject(USER_TOKEN);

  ngOnInit() : void{
  
    this.userService.onUserDetailsClicked.subscribe((data : User) => {
      this.selectUser = data;
      console.log(this.selectUser);
    })

  }


}
