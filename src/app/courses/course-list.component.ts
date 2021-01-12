import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  private _courses: Course[] = [];

  private _filterBy: string;
  filteredCourses: Course[] = [];

  imagemLargura = 50;
  imagemMargem = 2;

  constructor(private service: CourseService) {

  }

  ngOnInit(): void {
    this._courses = this.service.getAll();
    this.filteredCourses = this._courses;
  }

  get filter(): string {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) =>
      course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

}
