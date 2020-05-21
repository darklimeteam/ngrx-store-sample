import { Component, OnInit } from '@angular/core';

// App
import { settingsLoad } from './core/store/settings/settings.actions';
import { SettingsState } from './core/store/settings/settings.reducer';
import { Store, select } from '@ngrx/store';
import { selectSettings } from './core/store/settings/settings.selector';
import { Observable } from 'rxjs';
import { SettingsResponse } from './core/models/settings.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public settings$: Observable<SettingsResponse>;

  constructor(private store: Store<SettingsState>) {
    this.settings$ = this.store.pipe(select(selectSettings), tap(val => console.log('from app component', val)));
  }
  title = 'pwa-angular9';

  ngOnInit() {

    this.store.dispatch(settingsLoad());

  }
}
