import { createSelector } from 'reselect';
import { I18NEXT_REDUCER_NAME } from './constants';
import { initialState } from './reducer';
import { I18nextStorage, I18nextStoragePart } from './_types';
import { getFormattedLanguages } from './_utils/get-formatted-languages';

export const I18nextStorageSelector = (
  store: I18nextStoragePart,
): I18nextStorage => store[I18NEXT_REDUCER_NAME] || initialState;

export const i18nLanguagesListSelector = createSelector(
  [I18nextStorageSelector],
  ({ languagesList }: I18nextStorage) =>
    languagesList && languagesList.length
      ? getFormattedLanguages(languagesList)
      : [],
);

export const i18nLanguagesPureListSelector = createSelector(
  [I18nextStorageSelector],
  ({ languagesList }: I18nextStorage) => languagesList || [],
);
