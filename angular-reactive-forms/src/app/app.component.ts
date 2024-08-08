import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { noSpaceAllowed } from './validators/noSpaceAllowed.validator';
import { customValidators } from './validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'angular-reactive-forms';

  reactiveForm : FormGroup;
  formStatus : string = '';

  formData : any ;
  
  ngOnInit(): void {
      
    this.reactiveForm = new FormGroup({ 
      firstName : new FormControl(null, [Validators.required, customValidators.noSpaceAllowed]),
      lastName : new FormControl(null, [Validators.required, customValidators.noSpaceAllowed]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      // new FormControl(value, sync Validators, async Validators)
      userName : new FormControl(null, Validators.required, customValidators.checkUserName),
      dob : new FormControl(null),
      gender : new FormControl('male'),
      address : new FormGroup({
        country : new FormControl('India', Validators.required),
        city : new FormControl(null),
        street : new FormControl(null, Validators.required),
        postalCode : new FormControl(null, Validators.required),
        region : new FormControl(null),
      }),
      skills : new FormArray([
        new FormControl(null, Validators.required),
      ]),
      experience : new FormArray([
        
      ]),
    })


    // this.reactiveForm.get('firstName').valueChanges.subscribe( (value)=>{
    //   console.log(value);
    // })

    // this.reactiveForm.valueChanges.subscribe( (value)=>{
    //   console.log(value);
    // })

    this.reactiveForm.get('userName').statusChanges.subscribe( (value) =>{
      console.log(value);
    });

    this.reactiveForm.statusChanges.subscribe( (value) =>{
      console.log(value);
      this.formStatus = value;
    });
  }


  onFormSubmitted(): void {
    // console.log(this.reactiveForm)
    // console.log(this.reactiveForm.controls['firstName'].errors)

    console.log(this.reactiveForm.value);
    this.formData = this.reactiveForm.value;

    // this.reactiveForm.reset();
    this.reactiveForm.reset({
      firstName : '',
      lastName : '',
      email :  '',
      userName : '',
      dob : '',
      gender : 'malecode .
      ',
      address :{
        country : 'India',
        state : '',
        city : '',
        street : '',
        postalCode : '',
        region : '',
      },
      skills :'',
      experience : '',
    })

  }
  addSkills(){
    console.log('addSkills');
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  deleteSkills(index : number){
    const controls = (<FormArray>this.reactiveForm.get('skills'));
    controls.removeAt(index);
  }
  addExperience(){
    let formGroup = new FormGroup({
      company : new FormControl(null, Validators.required),
      position : new FormControl(null, Validators.required),
      totalExperience : new FormControl(null, [Validators.required,]),
      start :  new FormControl(null, Validators.required),
      end : new FormControl(null, Validators.required),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }
  deleteExperience(index : number){
    const controls = (<FormArray>this.reactiveForm.get('experience'));
    controls.removeAt(index);
  }

  generateUsername(){
    let username = '';
    const firstName = this.reactiveForm.get('firstName').value;
    const lastName = this.reactiveForm.get('lastName').value;
    const dob = this.reactiveForm.get('dob').value;

    if(firstName.length >=3){
      username += firstName.substring(0,3);
    }
    else{
      username += firstName;
    }
    if(lastName.length >=3){
      username += lastName.substring(0,3);
    }
    else{
      username += lastName;
    }
    let dateTime  = new Date(dob);
    username += dateTime.getFullYear();
    
    username = username.toLowerCase();

    console.log(username);

    //formGroup level updating

    // this.reactiveForm.setValue({
    //   firstName : this.reactiveForm.get('firstName').value,
    //   lastName : this.reactiveForm.get('lastName').value,
    //   email :  this.reactiveForm.get('email').value,
    //   userName : username,
    //   dob : this.reactiveForm.get('dob').value,
    //   gender : this.reactiveForm.get('gender').value,
    //   address :{
    //     country : 'India',
    //     state : this.reactiveForm.get('address.state').value,
    //     city : this.reactiveForm.get('address.city').value,
    //     street : this.reactiveForm.get('address.street').value,
    //     postalCode : this.reactiveForm.get('address.postalCode').value,
    //     region : this.reactiveForm.get('address.region').value,
    //   },
    //   skills :this.reactiveForm.get('skills').value,
    //   experience : this.reactiveForm.get('experience').value,
    // })


    //formControl level updating
    // this.reactiveForm.get('username').setValue(username);

    this.reactiveForm.patchValue(
      {
        userName : username,
      }
    )
  }
}


