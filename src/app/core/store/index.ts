import { ActionReducerMap } from '@ngrx/store';
import {  SettingsState, settingsReducer} from './settings/settings.reducer';

export interface RootState {
  settings: SettingsState;
}

export const reducers: ActionReducerMap<RootState> = {
  settings: settingsReducer
};
