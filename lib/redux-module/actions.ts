import i18next from 'i18next';
import { Dispatch } from 'redux';
import { BaseAction } from 'lib/types';

type ParamsType = {
  dispatch: Dispatch;
  startLoadingAction: BaseAction;
  errorAction?: BaseAction;
  stopLoadingAction: BaseAction;
  appNamespace: string;
  locale: string;
  requestUrl: string;
};

export const fetchLangDictAction = ({
  dispatch,
  startLoadingAction,
  errorAction,
  stopLoadingAction,
  appNamespace,
  locale,
  requestUrl,
}: ParamsType) =>
  new Promise(async resolve => {
    dispatch(startLoadingAction());
    try {
      const { translate: translation } = await fetch(requestUrl).then(data =>
        data.json(),
      );

      i18next.addResourceBundle(locale, appNamespace, {
        ...translation,
      });
    } catch (error) {
      console.error('get error when loading dict', error);
      if (errorAction) {
        dispatch(errorAction());
      }
    } finally {
      dispatch(stopLoadingAction());

      resolve();
    }
  });
