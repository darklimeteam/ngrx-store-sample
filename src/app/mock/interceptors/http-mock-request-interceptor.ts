// Angular
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

// Libs
import { Observable, of } from 'rxjs';

// App
import { environment } from '../../../environments/environment';
import * as notification from '../data/notification.json';
import * as settings from '../data/settings.json';

const urls = [

  {
    method: 'GET',
    url: 'notification',
    json: notification,
  },
  {
    method: 'GET',
    url: 'admin/settings',
    json: settings,
  },

];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO exclude assets/icons
    // if (request.url.includes('assets/icons')) {
    //   return next.handle(request);
    // }

    // if (request.url.indexOf(environment.uploadUrl) === 0) {
    //   return next.handle(request);
    // }

    for (const element of urls) {
      if (request.url === element.url && request.method === element.method) {
        console.log(request.method);
        console.log('Loaded from json : ' + request.url);
        console.log('body:', element.json);
        return of(new HttpResponse({ status: 200, body: (element.json as any).default }));
      }
    }
    console.log('Loaded from http call :' + request.url);
    return next.handle(
      request.clone({
        url: environment.apiBaseUrl + request.url,
      }),
    );
  }
}
