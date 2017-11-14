import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{CoursesService} from '../courses.service'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  //dependency injection
  constructor(courseService : CoursesService) { 
    this.courses_ = courseService.getCourses();
  }

  ngOnInit() {
  }

  title = "this is course title";
  courses_ ;
}
