import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  textValue : string = " Hello Subbu";

  logValue(){
    console.log("input has focused");
  }
}
