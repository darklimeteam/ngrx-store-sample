import { ActionReducerMap } from '@ngrx/store';
import { settingsReducer , SettingsState} from './settings/settings.reducer';
import { MetaState, metaReducer } from './meta/meta.reducer';

export interface RootState {
  settings: SettingsState;
  meta: MetaState;
}

export const reducers: ActionReducerMap<RootState> = {
  settings: settingsReducer,
  meta: metaReducer
};
