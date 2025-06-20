import { Component,OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { CourseCategory } from '../../../models/category';
import { MOCK_COURSE_CATEGORIES } from '../../../mock-data/mock-course-category';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
selector: 'app-category',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  {
   
 @Input() categories:CourseCategory[]=[]; // Input decorator is used to pass data from parent component to child component
  @Input() viewType: 'tabs' | 'list' = 'list'; // Default view type is 'tabs', can be set to 'cards' for card view
    constructor(private categoryService:CategoryService) {
      debugger;
     // this.categories = MOCK_COURSE_CATEGORIES;
     this.getCategories(); // Fetch categories from the service
    }

    //here subscribe is used to fetch data from the service 
    //means subscribe to the observable returned by the service
    getCategories() {
      debugger;
        this.categoryService.getCategories().subscribe({
            next: (data) => {
                this.categories = data;
            },
            error: (error) => {
                console.error('Error fetching categories:', error);
            }
        });
    }


   
}
