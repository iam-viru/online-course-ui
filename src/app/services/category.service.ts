import { Injectable } from '@angular/core';
import { environment } from '../../enviornments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseCategory } from '../models/category';
 

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private baseUrl: string = `${environment.apiUrl}/CourseCategory`;
    constructor(private http:HttpClient) { }

    /**
     * Fetches all course categories from the API.
     * @returns An Observable of an array of CourseCategory objects.
     * here observable is used to handle asynchronous data streams.
     */
    getCategories(): Observable<CourseCategory[]> {
    return this.http.get<CourseCategory[]>(`${this.baseUrl}`);
  } 
}