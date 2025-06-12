import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PlanAndPricingComponent } from "../plan-and-pricing/plan-and-pricing.component";

@Component({
  selector: 'app-home',
  imports: [CarouselModule, PlanAndPricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
