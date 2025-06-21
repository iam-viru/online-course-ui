import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { HttpRequestInterceptor } from './services/spinner-interceptor';
import { NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CarouselModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({type:'ball-scale-multiple' }),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      timeOut: 3000,  
}
    )),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
{
provide:HTTP_INTERCEPTORS,
useClass:HttpRequestInterceptor,
multi:true,
}
],
};
