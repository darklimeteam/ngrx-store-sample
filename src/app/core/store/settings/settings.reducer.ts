import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';
import { SettingsResponse } from '../../models/settings.model';

export interface SettingsState {
  theme: number;
  categories: Array<number>;
  language: string;
}

export const initialSettingsState: SettingsState = {
  theme: null,
  categories: [],
  language: null
};

export const settingsReducer = createReducer(
  initialSettingsState,
  on(SettingsActions.settingsLoadSuccess, (state, action) => {
    console.log('from reducer', action.settings);
    return action.settings;
  }),
  on(SettingsActions.updateSettingsSucess, (state, action) => {
    console.log('from reducer update', action.settings);
    return action.settings;
  }));

