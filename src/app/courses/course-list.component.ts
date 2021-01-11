import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular',
        imageUrl: '',
        price: 99.99,
        code: 'xps-763',
        duration: 120,
        rating: 7.2,
        releaseDate: '10/12/2020'
      },
      {
        id: 2,
        name: '.Net',
        imageUrl: '',
        price: 99.99,
        code: 'hkc-763',
        duration: 90,
        rating: 9.2,
        releaseDate: '11/01/2021'
      }
    ];
  }

}
