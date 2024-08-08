import { Component, inject } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // providers:[SubscribeService],// what to provide for component dependancy
})
export class HeaderComponent {
  selectedTab: string = 'home';

  subService : SubscribeService = inject(SubscribeService);
  //1. How to provide depandency to a component
  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  } 

  OnSubscribe(){
    this.subService.OnSubscribeClicked();
  } 
}