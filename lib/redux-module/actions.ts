import i18next from 'i18next';
import { Dispatch } from 'redux';
import { BaseAction, Action } from '../types';
import { fetchLanguagesActionParams, ResponseType } from './_types';

type ParamsType = {
  dispatch: Dispatch;
  startLoadingAction?: BaseAction;
  errorAction?: BaseAction;
  stopLoadingAction?: BaseAction;
  appNamespace: string;
  locale: string;
  requestUrl: string;
  i18nextRequest: (params: { endpoint: string }) => Promise<ResponseType>;
};

export const fetchLangDictAction = ({
  dispatch,
  startLoadingAction,
  errorAction,
  stopLoadingAction,
  appNamespace,
  locale,
  requestUrl,
  i18nextRequest,
}: ParamsType): Promise<void> =>
  new Promise(async resolve => {
    if (startLoadingAction) {
      dispatch(startLoadingAction());
    }

    try {
      const { data, error, errorText } = (await i18nextRequest({
        endpoint: requestUrl,
      })) as ResponseType & { data: { translate: Record<string, any> } };

      if (error) {
        throw new Error(errorText);
      }

      i18next.addResourceBundle(locale, appNamespace, {
        ...data.translate,
      });
    } catch (error) {
      console.error('get error when loading dict', error);
      if (errorAction) {
        dispatch(errorAction());
      }
    } finally {
      if (stopLoadingAction) {
        dispatch(stopLoadingAction());
      }

      resolve();
    }
  });

export const SET_LANGUAGES_ACTIONS = 'SET_LANGUAGES_ACTIONS';
export const setLanguagesListAction = (payload: Array<string>) => ({
  type: SET_LANGUAGES_ACTIONS,
  payload,
});

export const FETCH_LANGUAGES_ACTION =
  '@platform-sidebar/FETCH_LANGUAGES_ACTION';
export const fetchLanguagesAction: Action<
  fetchLanguagesActionParams
> = payload => ({
  type: FETCH_LANGUAGES_ACTION,
  payload,
});
