// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Libs
import { Observable } from 'rxjs';

// App
import { NotificationResponse } from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  public getNotifications(): Observable<Array<NotificationResponse>> {
    return this.http.get<Array<NotificationResponse>>(`notification`);
  }
}
