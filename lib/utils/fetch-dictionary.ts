import { BaseAction } from '../types';
import { fetchLangDictAction, ResponseType } from '../redux-module';

type ParamsType = {
  fromState: any;
  toState: any;
  store: any;
  startLoadingAction: BaseAction;
  stopLoadingAction: BaseAction;
  locale: string;
  appNamespace: string;
  requestUrl: string;
  i18nextRequest: (params: { endpoint: string }) => Promise<ResponseType>;
};

export const fetchDictionary = async ({
  fromState,
  toState,
  store,
  startLoadingAction,
  stopLoadingAction,
  appNamespace,
  locale,
  requestUrl,
  i18nextRequest,
}: ParamsType) => {
  // define first route name to navigate from
  const coreRouteFromStateName =
    fromState && fromState.name ? fromState.name.split('.')[0] : null;

  // define first route name to navigate to
  const coreRouteToStateName =
    toState && toState.name ? toState.name.split('.')[0] : null;

  if (toState && coreRouteToStateName !== coreRouteFromStateName) {
    await fetchLangDictAction({
      dispatch: store.dispatch,
      startLoadingAction,
      stopLoadingAction,
      appNamespace,
      locale,
      requestUrl,
      i18nextRequest,
    });
  }
};
