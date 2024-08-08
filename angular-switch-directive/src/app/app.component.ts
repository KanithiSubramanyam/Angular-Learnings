import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-switch-directive';

  tab: string = '';

  onInfoClick = () =>{
    this.tab = 'info';
  }
  onServiceClick = () =>{
    this.tab = 'service';
  }
  onPrivacyClick = () =>{
    this.tab = 'privacy';
  }
  onUserClick = () =>{
    this.tab = 'user';
  }
}
