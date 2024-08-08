import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { 

  }

  users: User[] = [];

  showConfirmDeleteComponent : boolean = false;
  ngOnInit() { 
    this.users = this.userService.users;
  }
}
