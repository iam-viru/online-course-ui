import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ BrowseCourseComponent} from '../browse-course/browse-course.component'; // Importing BrowseCourseComponent to use it in the template

@Component({
  selector: 'app-course-by-category',
  imports: [CommonModule,FormsModule,BrowseCourseComponent],
  templateUrl: './course-by-category.component.html',
  styleUrl: './course-by-category.component.css'
})
export class CourseByCategoryComponent implements OnInit {
categoryId: number = 0; // Default category ID, can be set dynamically based on routing or user selection
  constructor(private route: ActivatedRoute, private router: Router) {}

//this is lifecycle hook that is called when the component is initialized
// this is where you can perform any initialization logic, such as fetching data or setting up subscriptions
// ngOnInit is a good place to put initialization logic that needs to run after the component
 ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('categoryId')); // or 'categoryId' depending on your route configuration           
    });
  }
}
