import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }


  router : Router = inject(Router);

  activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  navigateToCourse(){

    //here using navigate we give the urls by array
    // this.router.navigate(['Courses']);

    //here using navigateByUrl we give the urls by string
    this.router.navigateByUrl('Courses');

    //here using navigate we convert the absoulte path to relative path
    // this.router.navigate(['Courses'], {relativeTo: this.activatedRoute});
  }
}
