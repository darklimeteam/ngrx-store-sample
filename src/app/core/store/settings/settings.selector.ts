// App
import { SettingsState } from '../settings/settings.reducer';
import { createSelector } from '@ngrx/store';

export const selectRootState = (state: SettingsState) => state;
export const selectSettings = createSelector(
  selectRootState,
  (state: SettingsState) => state.settings
);

