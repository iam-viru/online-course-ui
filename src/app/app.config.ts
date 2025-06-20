import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CarouselModule.forRoot()),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
  provideHttpClient(withInterceptorsFromDi())]
};
