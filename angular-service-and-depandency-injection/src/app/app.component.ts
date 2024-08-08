import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[SubscribeService] // what to provide for app component
})
export class AppComponent {
  title = 'angular-service-and-depandency-injection';
}
