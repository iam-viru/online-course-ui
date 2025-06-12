import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/core/nav-bar/nav-bar.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',// this is the selector for the root component, it is used for component selector in HTML
    
  imports: [RouterOutlet, NavBarComponent, HomeComponent],// this imports the RouterOutlet directive, which is used for routing in Angular applications
  templateUrl: './app.component.html',// this is the path to the HTML template for the component
  // it contains the HTML structure of the component
  styleUrl: './app.component.css'// this is the path to the CSS file for the component
  // it contains the styles for the component
})
export class AppComponent {
  title = 'online-course-ui';
}
