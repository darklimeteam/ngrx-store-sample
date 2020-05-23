import { ActionReducerMap } from '@ngrx/store';
import { settingsReducer , SettingsState} from './settings/settings.reducer';

export interface RootState {
  settings: SettingsState;
}

export const reducers: ActionReducerMap<RootState> = {
  settings: settingsReducer
};
