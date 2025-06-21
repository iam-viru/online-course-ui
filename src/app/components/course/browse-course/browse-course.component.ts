import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { MOCK_COURSES } from '../../../mock-data/mock-courses';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseCategory } from '../../../models/category';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-browse-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css'
})
export class BrowseCourseComponent implements OnInit, OnChanges {

 
  courses: Course[] = [];

  //here input is used to pass the data from parent component to child component
  // this is used to pass the categoryId from the parent component to the child component
  // in same case if child needs to communicate with parent component than we use @output decorator
  @Input() categoryId: number = 0; // Default category ID, can be set dynamically based on routing or user selection
  constructor(private courseService: CourseService) {
    this.courses = MOCK_COURSES;
  }

  //this is lifecycle hook that is called when the component is initialized
  // this is where you can perform any initialization logic, such as fetching data or setting up subscriptions
  ngOnInit(): void {
    this.processCourse(); 
  }

  // ngOnChanges is a lifecycle hook that is called when any data-bound property of a directive changes
  // It is called before ngOnInit and whenever one or more data-bound input properties change
  ngOnChanges(changes: SimpleChanges): void {
    this.processCourse();
  }
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;

  }

  processCourse(): void {
    this.getCourseByCategory(this.categoryId);
  }
  getCourseByCategory(CategoryId: number) {
    this.courseService.getCoursesByCategoryId(CategoryId).subscribe(data=>{
    //this.courses = MOCK_COURSES.filter(course => course.categoryId === CategoryId);
    if (data.length === 0) {
      console.error(`No courses found for category ID: ${CategoryId}`);
    }else{
      this.courses = data;
    }
  }
    , error => {
      console.error(`Error fetching courses for category ID: ${CategoryId}`, error);
    }
    );
  } 
}
  
