import { Action, createReducer, on } from '@ngrx/store';
import * as settingsActions from '../settings/settings.actions';

export interface MetaState {
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialMetaState: MetaState = {
  loading: null,
  loaded: null,
  error: null
};

export const metaReducer = createReducer(
  initialMetaState,
  on(settingsActions.settingsLoad, (state, action) => {
    console.log('from reducer', action);
    return {loading: true, loaded: false, error: null};
  }),
  on(settingsActions.settingsLoadSuccess, (state, action) => {
    console.log('from reducer update', action);
    return {loading: false, loaded: true, error: null};
  }),
  on(settingsActions.settingsLoadFail, (state, action) => {
    console.log('from reducer update', action.error);
    return {loading: false, loaded: false, error: action.error};
  }),
  on(settingsActions.updateSettings, (state, action) => {
    console.log('from reducer', action);
    return {loading: true, loaded: false, error: null};
  }),
  on(settingsActions.updateSettingsSucess, (state, action) => {
    console.log('from reducer update', action);
    return {loading: false, loaded: true, error: null};
  }),
  on(settingsActions.updateSettingsFail, (state, action) => {
    console.log('from reducer update', action.error);
    return {loading: false, loaded: false, error: action.error};
  }),
  );

