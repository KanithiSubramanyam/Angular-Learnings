import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-lifeCycle-Hooks';
  // inputValue:string[] = ['Hello', 'hi There'];
  inputValue:string = '';

  toDestroy : boolean = false;
  constructor() {
    console.log('app component');
  }

  ngAfterViewInit() {
  //  console.log('ngAfterViewInit of app component called ');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked of app component called ');
   }
  onClick( input : HTMLInputElement){
    this.inputValue = input.value
  }

  onDestroy() {
    this.toDestroy = !this.toDestroy;
  }
}
