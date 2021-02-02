type ParamsType = {
  locale: string;
  namespace: string;
};

export const getI18nextRequestEndpoint = ({
  locale,
  namespace,
}: ParamsType): string => `/I18N/${namespace}/${locale}/i18next`;
