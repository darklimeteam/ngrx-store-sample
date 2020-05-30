import { Component, OnInit } from '@angular/core';

// App
import { settingsLoad, updateSettings } from './core/store/settings/settings.actions';
import { SettingsState } from './core/store/settings/settings.reducer';
import { Store, select } from '@ngrx/store';
import { selectSettings } from './core/store/settings/settings.selector';
import { Observable } from 'rxjs';
import { SettingsResponse } from './core/models/settings.model';
import { map, tap } from 'rxjs/operators';
import { RootState } from './core/store';
import { selectMeta } from './core/store/meta/meta.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public settings$: Observable<SettingsResponse>;
  public settings: SettingsResponse | string;
  public loading$: Observable<boolean>;

  constructor(private store: Store<RootState>) {
    this.settings$ = this.store.pipe(select(selectSettings),
      tap(val => console.log('from app component', val)))
      .pipe(tap(settings => this.settings = JSON.stringify(settings)));
    this.loading$ = this.store.pipe(select(selectMeta),
      tap(val => console.log('from app component meta', val)))
      .pipe(map(meta => meta.loading));
  }
  title = 'pwa-angular9';

  ngOnInit() {
    this.store.dispatch(settingsLoad());
  }

  save() {
    const inputForUpdate: SettingsResponse = JSON.parse(this.settings as string) as SettingsResponse;
    this.store.dispatch(updateSettings({ settings: inputForUpdate }));
  }
}
