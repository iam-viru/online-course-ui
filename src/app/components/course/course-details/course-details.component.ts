import { Component, OnInit } from '@angular/core';
import { CourseDetails } from '../../../models/course';
import { UserModel } from '../../../models/usermodel';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { ToastrService } from 'ngx-toastr';
import { UserProfileService } from '../../../services/user-profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';

@Component({
  selector: 'app-course-details',
  imports: [ CommonModule,
    FormsModule, 
    RatingModule,
    RouterModule,],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  course: any;
 courseDetails: CourseDetails | null = null;
  videoUrl: string | null = null;
  courseId!: number;
  activeSessions: Set<number> = new Set<number>(); // Track active sessions for collapsing
  isLoggedIn = false;
  userId = 0;
  instructorInfo!: UserModel;
  constructor(  private route: ActivatedRoute,
    private courseService: CourseService,  
    private toastr: ToastrService,
  private userService: UserProfileService ) {
    // Initialize course with some dummy data
    this.course = {
      id: 1,
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      duration: '4 weeks',
      instructor: 'John Doe'
    };
  }

  ngOnInit(): void {
    // Access the resolved data via route.data
    this.courseDetails = this.route.snapshot.data['courseDetails'];
    this.courseId = this.courseDetails?.courseId || 0;
    if (!this.courseDetails) {
      // Handle case where data is not found (e.g., show an error)
      console.error('Course details not found, retrying to fetch from API');
      this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
      this.getCourseDetails();
    }

    //this.isLoggedIn = this.loginService.isLoggedIn;
    //this.userId = this.loginService.userId;
  }

  getCourseDetails() {
    this.courseService.getCourseDetails(this.courseId).subscribe((data) => {
      this.courseDetails = data;
      this.getInstructorInfo(data.instructorUserId);
      this.courseDetails.description = this.courseDetails.description.replace(
        /\n/g,
        '<br>'
      );
      this.courseDetails.sessionDetails.forEach((s) => {
        s.description = s.description.replace(/\n/g, '<br>');
      });
    });
  }

   getInstructorInfo(userId: number) {
    return null;
    };

     openVideo(videoUrl: string): void {
    const videoId = this.extractVideoId(videoUrl);
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
  }
  private extractVideoId(url: string): string {
    const regex = /youtube\.com\/watch\?v=([^"&?/]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }


  
  }


