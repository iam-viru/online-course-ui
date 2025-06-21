import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, httpResource, HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable()
//this interceptor will be used to intercept every single call that goes outside.
// It can be used to add headers, log requests, or handle errors globally.
//her we have use the rjxjs library to handle the asynchronous nature of HTTP requests
//it is used to handle the response and error in a more elegant way
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private spinner:NgxSpinnerService,private toaster:ToastrService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();//show the spinner once any outgoing request is made 
         return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.toaster.success('Request successful');
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.toaster.error(`Request failed: ${error.message}`);
        return throwError(error);
      }),
      finalize(() => {        
        this.spinner.hide();
      })
    );
    }
}