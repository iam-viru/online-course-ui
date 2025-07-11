import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/course/category/category.component';    
import { BrowseCourseComponent } from './components/course/browse-course/browse-course.component';
import { CourseByCategoryComponent } from './components/course/course-by-category/course-by-category.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { ContactUsComponent } from './components/core/contact-us/contact-us.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';
import { courseResolver } from './resolvers/course-detail.resolver';

export const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent ,  data: { animation: 'HomePage' }},
  { path: 'course/category', component: CategoryComponent },
  { path: 'course/category/:categoryId', component: CourseByCategoryComponent },    
  { path: 'course/session-details/:courseId',
    component: CourseDetailsComponent,
    resolve : {
      courseDetails: courseResolver
    }
   },
  {path: 'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent}
  

];
