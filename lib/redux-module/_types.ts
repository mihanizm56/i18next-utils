import { I18NEXT_REDUCER_NAME } from './constants';

export type I18nextStorage = {
  languagesList: Array<string>;
};

export type I18nextStoragePart = {
  [I18NEXT_REDUCER_NAME]: I18nextStorage;
};

export type LanguageObjectType = {
  id: string;
  value: string;
};

export type ResponseType = {
  error: boolean;
  errorText: string;
  data: any;
  additionalErrors: Record<string, any> | null;
  code: number;
};

export type fetchLanguagesActionParams = {
  languagesRequest: () => Promise<ResponseType>;
  languagesFallback?: Array<string>;
};
