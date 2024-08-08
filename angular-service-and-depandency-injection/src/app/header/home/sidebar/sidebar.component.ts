import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // providers: [SubscribeService] // what to provide
})
export class SidebarComponent {
  //how to proivde dependancy
  constructor(private subService: SubscribeService){}
  OnSubscribe(){
    this.subService.OnSubscribeClicked();
  } 
}
