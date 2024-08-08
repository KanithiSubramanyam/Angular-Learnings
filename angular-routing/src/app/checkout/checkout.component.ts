import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  course;

   router : Router = inject (Router);

   ngOnInit() {

    // this.course = this.router.getCurrentNavigation().extras.state;

    this.course = history.state

   }
}
