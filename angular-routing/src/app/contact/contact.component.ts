import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Services/AuthGaurd.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent {

  firstName : string = '';
  lastName : string = '';
  country : string = 'usa';
  message : string = '';


  isSubmitted : boolean = false;
  onSubmit(){
    this.isSubmitted = true;
  }
  canExit(){
    if((this.firstName || this.lastName || this.message) && (!this.isSubmitted)){
      return confirm('you have unsaved changes. Do you eant to navigate away?')
    }
    else{
      return true;
    }
  }
}
