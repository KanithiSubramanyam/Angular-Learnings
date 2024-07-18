import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


//   @Input()
//   cars : {
//   name : string;
//   price : number;
//   color : string;
// };


@Input()
users : {
  name : string;
  email : string;
}


}
