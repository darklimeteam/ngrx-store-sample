// App
import { SettingsState } from '../settings/settings.reducer';
import { createSelector } from '@ngrx/store';
import { RootState } from '..';

export const selectRootState = (state: RootState) => state;
export const selectSettings = createSelector(
  selectRootState,
  (state: RootState) => state.settings
);
