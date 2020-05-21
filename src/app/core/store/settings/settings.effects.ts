import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as SettingsActions from './settings.actions';
import { SettingsService } from '../../services/settings.service';

@Injectable()
export class SettingsEffects {

  productLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[Settings] Load'),
    mergeMap(() => this.settingsService.getSettings()
      .pipe(
        tap(settings => console.log('from productLoad effect', settings)),
        map(settings => SettingsActions.settingsLoadSuccess({ settings })),
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) {
  }
}
