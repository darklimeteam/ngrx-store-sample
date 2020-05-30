// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Libs
import { Observable, of } from 'rxjs';

// App
import { SettingsResponse } from '../models/settings.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  public getSettings(): Observable<SettingsResponse> {
    return this.http.get<SettingsResponse>(`admin/settings`).pipe(delay(2000));
  }

  public updateSettings(settings: SettingsResponse): Observable<SettingsResponse> {
    // TODO POST request to server
    // return this.http.post<SettingsResponse>(`admin/settings`, settings);
    return of(settings).pipe(delay(2000));
  }
}
