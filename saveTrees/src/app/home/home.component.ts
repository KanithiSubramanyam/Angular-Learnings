import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Home of page';

  product = {
    name: 'Product 1',
    price: 100
  }
  User = {
    name: 'subbu',
    age: 100
  }

  imgpath = '../../assets/images/image1.jpg';
}
