import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-custom-structural-directive';
  display : boolean = false;

  displayTermsOfServices(){
    this.display = !this.display;
  }
}
