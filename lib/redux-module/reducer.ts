import { SET_LANGUAGES_ACTIONS } from './actions';
import { I18nextStorage } from './_types';

type I18nextActionsType = {
  type: string;
  payload: Array<string>;
};

export const initialState: I18nextStorage = {
  languagesList: [],
};

export const i18nReducer = (
  state = initialState,
  { type, payload }: I18nextActionsType,
): I18nextStorage => {
  switch (type) {
    case SET_LANGUAGES_ACTIONS:
      return { ...state, languagesList: payload };

    default:
      return state;
  }
};
