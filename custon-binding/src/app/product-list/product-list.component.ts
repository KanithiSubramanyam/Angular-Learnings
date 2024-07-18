import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productName : string = "Motorola Edge 50 Fusion";
  productPrice : number = 20999;
  productColor : string = "Red";

  cars = [
      {
      "name": "Ford",
      "price": 20000,
      "color": "Black"
    },
    {
      "name": "BMW",
      "price": 30000,
      "color": "White"
    },
    {
      "name": "Fiat",
      "price": 40000,
      "color": "Yellow"
    },
    {
      "name": "Honda",
      "price": 40000,
      "color": "Blue"
    }
  ]

  productNameChange(event:any){
    console.log(event.target.value);
    this.productName = event.target.value;
  }

  productPriceChange(event:any){
    this.productPrice = event.target.value;
  }

  productColorChange(event:any){
    this.productColor = event.target.value
  }

  carModel:string = "";

  changeCarModel(event:any){
    this.carModel = event.target.value;
  }


  user = [{
    name: "John",
    email: "john@mail.com"
  },
  {
    name: "Jane",
    email: "jane@mail.com"
  }];

  
  addItem = (event : {name: string, email:string}) => {
    this.user.push(event);
  }
}
