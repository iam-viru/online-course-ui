import { Component,OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { CourseCategory } from '../../../models/category';
import { MOCK_COURSE_CATEGORIES } from '../../../mock-data/mock-course-category';
import { RouterModule } from '@angular/router';
@Component({
selector: 'app-category',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  {
    categories: CourseCategory[] = [];

    constructor() {
      this.categories = MOCK_COURSE_CATEGORIES;
    }


   
}
