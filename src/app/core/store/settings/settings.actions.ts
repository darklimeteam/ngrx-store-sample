import { createAction, props, Store } from '@ngrx/store';
import { SettingsResponse } from '../../models/settings.model';
import { Injectable } from '@angular/core';
import { SettingsState } from './settings.reducer';

export const settingsLoad = createAction(
  '[Settings] Load'
);

export const settingsLoadSuccess = createAction(
  '[Settings] Load Success',
  props<{settings: SettingsResponse}>()
);

export const settingsLoadFail = createAction(
  '[Settings] Load Fail',
  props<{error: string }>()
);


@Injectable({
  providedIn: 'root',
})
export class SettingsActions {
  constructor(private store$: Store<SettingsState>) {}

  public settingsLoadDispatch(): void {
    this.store$.dispatch(settingsLoad());
  }

}
