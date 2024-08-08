import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;

  searchString: string = "";
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);


  ngOnInit() {
  //  this.searchString = this.activatedRoute.snapshot.queryParams['search'];
  // this.searchString = this.activatedRoute.snapshot.queryParamMap.get('search');
  //  console.log(this.searchString)

  this.activatedRoute.queryParamMap.subscribe((val) => {
    this.searchString = val.get('search');
    
    if(this.searchString === undefined || this.searchString === "" || this.searchString === null){
      // this.coursesService.getAllcourses().subscribe(
      //   (data : Course[]) =>{
      //     this.AllCourses = data;
      //   }
      // );

      this.AllCourses = this.activatedRoute.snapshot.data['courses']
     }
     else{
      this.AllCourses = this.coursesService.courses.filter( course => course.title.toLowerCase().includes(this.searchString.toLowerCase()) );
     }
  })
   
  }

}
