import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as SettingsActions from './settings.actions';
import { SettingsService } from '../../services/settings.service';
import { SettingsResponse } from '../../models/settings.model';

@Injectable()
export class SettingsEffects {

  settingsLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[Settings] Load'),
    mergeMap(() => this.settingsService.getSettings()
      .pipe(
        tap(settings => console.log('from settingsLoad effect', settings)),
        map(settings => SettingsActions.settingsLoadSuccess({ settings })),
      ))
  )
  );

  updateSettings$ = createEffect(() => this.actions$.pipe(
    ofType('[Settings] Update'),
    mergeMap((payload: {settings: SettingsResponse}) => this.settingsService.updateSettings(payload.settings)
      .pipe(
        tap(settings => console.log('from updateSettings effect', settings)),
        map(settings => SettingsActions.updateSettingsSucess({ settings })),
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) {
  }
}
