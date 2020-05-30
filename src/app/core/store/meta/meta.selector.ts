// App
import { createSelector } from '@ngrx/store';
import { RootState } from '..';

export const selectRootState = (state: RootState) => state;
export const selectMeta = createSelector(
  selectRootState,
  (state: RootState) => state.meta
);

