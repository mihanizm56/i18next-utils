import i18next from 'i18next';
import { Dispatch } from 'redux';
import { PureRestRequest, IResponse } from '@mihanizm56/fetch-api';
import { BaseAction } from '../types';

type ParamsType = {
  dispatch: Dispatch;
  startLoadingAction?: BaseAction;
  errorAction?: BaseAction;
  stopLoadingAction?: BaseAction;
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
    if (startLoadingAction) {
      dispatch(startLoadingAction());
    }

    try {
      const {
        data,
        error,
        errorText,
      } = (await new PureRestRequest().getRequest({
        extraValidationCallback: () => true,
        endpoint: requestUrl,
        parseType: 'json',
        customTimeout: 3000,
      })) as IResponse & { data: { translate: Record<string, any> } };

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
