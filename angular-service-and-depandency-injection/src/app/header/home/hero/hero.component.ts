import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers:[SubscribeService]
})
export class HeroComponent {

  //How to provide dependancy injection
  // constructor(private subService:SubscribeService){}

  subService = inject(SubscribeService);

  OnSubscribe(){
    this.subService.OnSubscribeClicked();
  } 
}
