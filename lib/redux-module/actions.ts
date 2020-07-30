import i18next from 'i18next';
import { Dispatch } from 'redux';
import { BaseAction } from 'lib/types';
import {
  DictionaryRegisterType,
  dictionaryRegisterer,
} from 'lib/utils/dictionary-registerer';

type ParamsType = {
  dispatch: Dispatch;
  startLoadingAction: BaseAction;
  errorAction?: BaseAction;
  stopLoadingAction: BaseAction;
  appNamespace: string;
  locale: string;
  requestUrl: string;
  registeredDictionaries?: Array<DictionaryRegisterType>;
};

export const fetchLangDictAction = ({
  dispatch,
  startLoadingAction,
  errorAction,
  stopLoadingAction,
  appNamespace,
  locale,
  requestUrl,
  registeredDictionaries,
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

      if (registeredDictionaries) {
        registeredDictionaries.forEach(dictionary =>
          dictionaryRegisterer.setDictionary(dictionary),
        );
      }
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
