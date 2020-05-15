// Angular
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

// Libs
import { Observable, of } from 'rxjs';

// App
import { environment } from '../../../environments/environment';
import * as notification from '../data/notification.json';
import * as setting from '../data/setting.json';

const urls = [
  /*
{
   method: 'POST',
   url: 'login',
   json: login,
 },
 {
   method: 'POST',
   url: 'check',
   json: check,
 },
 {
    method: 'POST',
   url: 'logout',
    json: logout,
 },
 {
   method: 'GET',
   url: 'department',
   json: department,
 },
 {
   method: 'GET',
   url: 'evaluator',
   json: evaluator,
 },
 {
   method: 'GET',
   url: 'category',
   json: category,
 },
  {
    method: 'GET',
    url: 'company',
    json: company,
  },
  {
    method: 'GET',
    url: 'executor',
    json: executor,
  },
   */
  {
    method: 'GET',
    url: 'notification',
    json: notification,
  },
  {
    method: 'GET',
    url: 'admin/setting',
    json: setting,
  },
  // {
  //   method: 'GET',
  //   url: 'admin/category',
  //   json: category,
  // },
  /*
  {
    method: 'GET',
    url: 'idea',
    json: idea,
  },
  {
    method: 'POST',
    url: 'idea',
    json: newIdea,
  },
  {
    method: 'GET',
    url: 'idea/1',
    json: { default: idea[0] },
  },
  {
    method: 'GET',
    url: 'idea/2',
    json: { default: idea[1] },
  },
  {
    method: 'GET',
    url: 'idea/3',
    json: { default: idea[2] },
  },
  */
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
