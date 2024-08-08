import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    activatedRoute : ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.activatedRoute.fragment.subscribe((data)=>{
            // console.log(data);
            this.jumpToSection(data);
        })
    }
    jumpToSection(section){

        document.getElementById(section).scrollIntoView({behavior:'smooth'});
    }
}