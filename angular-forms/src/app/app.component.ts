import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';


  firstName : string = "";
  lastName : string = "";
  emailAddress : string = "";
  dob : string = "";
  gender : string = "";
  userName : string = "";
  street1 : string = "";
  street2  : string = "";
  city : string = "";
  country : string = "";
  region : string = "";
  postalCode : string = "";
  isAgreed : boolean = false;

  @ViewChild('registrationForm') form : NgForm;

  genders  = [
    {id:'check-male', value : 'male', display : 'Male'},
    {id:'check-female', value : 'female', display : 'Female'},
    {id:'check-other', value : 'prefer not to say', display : 'Prefer not to say'},
  ];
  onFormSubmitted(){
    console.log(this.form);

    this.firstName = this.form.value.firstName;
    this.lastName = this.form.value.lastName;
    this.emailAddress = this.form.value.email;
    this.dob = this.form.value.dob;
    this.gender = this.form.value.gender;
    this.userName = this.form.value.username;
    this.street1 = this.form.value.address.street1;
    this.street2 = this.form.value.address.street2;
    this.city = this.form.value.address.city;
    this.country = this.form.value.address.country;
    this.region = this.form.value.address.region;
    this.postalCode = this.form.value.address.postalCode;
    this.isAgreed = this.form.value.agreement;

    // this.form.reset();

    this.form.form.patchValue({
      gender : 'male',
      address: {
        country : 'India',
      }
    })
  }

  generateUsername(){

    let username : string = "";

    if(this.firstName.length >= 3){
      username += this.firstName.slice(0,3);
    }
    else{
      username += this.firstName;
    }

    console.log(username);

    if(this.lastName.length >= 3){
      username += this.lastName.slice(0,3);
    }
    else{
      username += this.lastName;
    }
    
    console.log(username);


    let dateTime = new Date(this.dob);

    username += dateTime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

    // this.form.value.username = username;
    // this.form.controls['username'].value = username;


    //set value() method

    // this.form.setValue({
    //   firstName : this.form.value.firstName,
    //   lastName : this.form.value.lastName,
    //   email : this.form.value.email,
    //   phoneNumber : this.form.value.phoneNumber,
    //   dob : this.form.value.dob,
    //   gender : this.form.value.gender,
    //   username : username,
    //   address : {
    //     street1 : this.form.value.address.street1,
    //     street2 : this.form.value.address.street2,
    //     country : this.form.value.address.country,
    //     city : this.form.value.address.city,
    //     region : this.form.value.address.region,
    //     postalCode : this.form.value.address.postalCode,
    //   }

    // });

    this.form.form.patchValue({
      username : username,
      // address: {
      //   country : 'japan'
      // }
    });
  }
}