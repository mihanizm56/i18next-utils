import i18next from 'i18next';
import ICU from 'i18next-icu';

type ParamsType = {
  appNamespace?: string;
  locale: string;
  initialResources?: Record<string, any>;
  debug?: boolean;
};

const isDev = process.env.NODE_ENV !== 'production';

export const geti18Next = ({
  appNamespace,
  locale,
  initialResources,
  debug,
}: ParamsType) =>
  new Promise<void>(async resolve => {
    await i18next.use(ICU).init({
      debug: debug || isDev,
      lng: locale,
      ns: appNamespace ? [appNamespace] : [],
      lowerCaseLng: true,
      returnEmptyString: false,
      resources: { ...initialResources },
    });

    resolve();
  });

export const geti18NextSync = ({ appNamespace, locale }: ParamsType) =>
  i18next.use(ICU).init({
    debug: isDev,
    lng: locale,
    ns: appNamespace ? [appNamespace] : [],
    lowerCaseLng: true,
    returnEmptyString: false,
    resources: {},
  });
