import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';
import { SettingsResponse } from '../../models/settings.model';

export interface SettingsState {
  settings: SettingsResponse;
}

export const initialSettingsState: SettingsState = {
  settings: null,
};

const settingsReducer = createReducer(
  initialSettingsState,
  on(SettingsActions.settingsLoadSuccess, (state, action) => {
    console.log(action.settings); return {settings: action.settings};
  }));


export function reducerSettings(state: SettingsState, action: Action) {
  return settingsReducer(state, action);
}
