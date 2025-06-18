import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { MOCK_COURSES } from '../../../mock-data/mock-courses';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-browse-course',
  imports: [FormsModule,CommonModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css'
})
export class BrowseCourseComponent {
courses: Course[]=[];
constructor() {
this.courses=MOCK_COURSES;
}
formatPrice(price:number): string {
  return `$${price.toFixed(2)}`;

 }
}
