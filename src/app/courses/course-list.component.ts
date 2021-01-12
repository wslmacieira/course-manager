import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  imagemLargura = 50;
  imagemMargem = 2;

  constructor(private service: CourseService) {

  }

  ngOnInit(): void {
    this.courses = this.service.getAll();
  }

}
