import { I18NEXT_REDUCER_NAME } from './constants';

export type I18nextStorage = {
  languagesList: Array<string>;
};

export type I18nextStoragePart = {
  [I18NEXT_REDUCER_NAME]: I18nextStorage;
};
