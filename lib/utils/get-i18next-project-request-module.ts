import i18next from 'i18next';
import { i18nextRequest } from 'lib/api/i18next-request';
import { getLocale } from './get-locale';
import { getI18nextRequestEndpoint } from './get-i18next-endpoint';

const locale = getLocale();

type ParamsType1 = {
  namespace: string;
  isDataCritical: boolean;
  requestTimeout?: number;
};

export const geti18nextProjectRequestModule = ({
  namespace,
  isDataCritical,
  requestTimeout,
}: ParamsType1) => ({
  request: () => {
    const translationsCached = i18next.getResourceBundle(locale, namespace);

    if (translationsCached) {
      return Promise.resolve({
        data: { translate: i18next.getResourceBundle(locale, namespace) },
        error: false,
        errorText: '',
        additionalErrors: null,
      });
    }

    return i18nextRequest({
      endpoint: getI18nextRequestEndpoint({
        locale,
        namespace,
      }),
      requestTimeout,
    });
  },
  showSuccessNotification: false,
  requestDataFormatter: (data: { translate: Record<string, string> }) => {
    if (data) {
      i18next.addResourceBundle(locale, namespace, {
        ...data.translate,
      });
    }
  },
  isDataCritical,
});
