import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CourseDetails, InstructorModel } from '../models/course';
import { environment } from '../../enviornments/environment';

@Injectable({providedIn: 'root' })
export class CourseService {
private baseUrl=`${environment.apiUrl}/course`;
private apiUrl=`${this.baseUrl}`;

    constructor(private httpClient: HttpClient) { }

    //her observable is used to handle the asynchronous nature of HTTP requests
    // use of Observable allows us to subscribe to the response and handle it when it arrives
    getCoursesByCategoryId(categoryId: number) :Observable<Course[]>{
        return this.httpClient.get<Course[]>(`${this.apiUrl}/category/${categoryId}`);

    }

    getCourseDetails(courseId:number): Observable<CourseDetails> {
        return this.httpClient.get<CourseDetails>(`${this.apiUrl}/Detail/${courseId}`);
    }

    getAllCourses(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.apiUrl);
    }

    createCourse(course: Course): Observable<Course> {
        return this.httpClient.post<Course>(this.apiUrl, course);
    }

    updateCourse(courseId:number,course: Course): Observable<Course> {
        return this.httpClient.put<Course>(`${this.apiUrl}/${courseId}`, course);
    }

    getInstructors(): Observable<InstructorModel[]> {
        return this.httpClient.get<InstructorModel[]>(`${this.baseUrl}/instructors`);
    }
    deleteCourse(courseId: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${courseId}`);
    }

    uploadThumbnail(formData: FormData): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}/upload-thumbnail`, formData);
    }
    
}