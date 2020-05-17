// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Libs
import { Observable } from 'rxjs';

// App
import { SettingsResponse } from '../models/settings.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  public getSettings(): Observable<SettingsResponse> {
    return this.http.get<SettingsResponse>(`admin/settings`);
  }
}
