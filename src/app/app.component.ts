import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/core/nav-bar/nav-bar.component";
import { HomeComponent } from "./components/home/home.component";
import{ NgxSpinnerComponent} from  'ngx-spinner'; // Importing ngx-spinner for loading indicators
import { trigger, transition, style, query, group, animate } from '@angular/animations';
@Component({
  selector: 'app-root',// this is the selector for the root component, it is used for component selector in HTML
    
  imports: [RouterOutlet, NavBarComponent,NgxSpinnerComponent],// this imports the RouterOutlet directive, which is used for routing in Angular applications
  templateUrl: './app.component.html',// this is the path to the HTML template for the component
  // it contains the HTML structure of the component
  styleUrl: './app.component.css',// this is the path to the CSS file for the component
  // it contains the styles for the component
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'translateX(100%)' }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'online-course-ui';
}
