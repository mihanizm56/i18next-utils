import { createSelector } from 'reselect';
import { I18NEXT_REDUCER_NAME } from './constants';
import { initialState } from './reducer';
import { I18nextStorage, I18nextStoragePart } from './_types';

export const loginStorageSelector = (
  store: I18nextStoragePart,
): I18nextStorage => store[I18NEXT_REDUCER_NAME] || initialState;

export const authorizationTokenSelector = createSelector(
  [loginStorageSelector],
  ({ languagesList }: I18nextStorage) => languagesList,
);
