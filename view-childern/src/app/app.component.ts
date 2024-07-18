import { QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-childern';
  fullName : string = '';
  firstName : string = '';

  data : string = '';
  @ViewChildren(' inputEl ') inputElements : QueryList<ElementRef>;

  @ViewChild('input') viewChildName : ElementRef;
  
  @ViewChild('childInput') demoChild : DemoComponent;


  show(){
    this.inputElements.forEach(element => {
      this.fullName += element.nativeElement.value + ' '
    });
    this.fullName = this.fullName.trim();
    
  }
  showName(){
    console.log(this.demoChild.name)
    this.firstName = this.viewChildName.nativeElement.value;

  }
}
 