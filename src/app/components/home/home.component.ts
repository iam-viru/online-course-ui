import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PlanAndPricingComponent } from "../plan-and-pricing/plan-and-pricing.component";
import { CategoryComponent } from '../course/category/category.component';
import { BrowseCourseComponent } from "../course/browse-course/browse-course.component";
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  imports: [CarouselModule, PlanAndPricingComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
