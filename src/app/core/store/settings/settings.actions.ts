import { createAction, props, Store } from '@ngrx/store';
import { SettingsResponse } from '../../models/settings.model';

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


export const updateSettings = createAction(
  '[Settings] Update',
  props<{settings: SettingsResponse}>()
);

export const updateSettingsSucess = createAction(
  '[Settings] Update Success',
  props<{settings: SettingsResponse}>()
);

