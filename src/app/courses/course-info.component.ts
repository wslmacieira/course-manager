import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private route: ActivatedRoute, private service: CourseService) {

  }
  ngOnInit(): void {
    this.course = this.service.getById(+this.route.snapshot.paramMap.get('id')) ;
    console.log(this.course);
  }

  save(): void {
    this.service.save(this.course);
  }

}
