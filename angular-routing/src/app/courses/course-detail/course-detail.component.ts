import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  selectedCourse : Course;
  courseId : number;

  courseService : CourseService = inject(CourseService);
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  paramMapObs ;

  ngOnInit() {

    //this is old  version using params
    // this.courseId = this.activatedRoute.snapshot.params['id'];

    //this is new version using paramMap and the + operator to convert string to number
    //here using snapshot it will not get notified about changing the id so we use observable
    // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.courseId);

    //used observable her by
    // this.activatedRoute.params.subscribe( (data) => {
    //   this.courseId = +data['id'];
    
    //here we will get course object from course service
    //    this.selectedCourse = this.courseService.courses.find( (course) => course.id === this.courseId);
    // })

    this.paramMapObs = this.activatedRoute.paramMap.subscribe( (data) => {
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find( (course) => course.id === this.courseId);
    })
    
  }

  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}
