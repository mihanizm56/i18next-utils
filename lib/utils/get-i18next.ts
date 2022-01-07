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
  appNamespace = 'default',
  locale,
  initialResources,
  debug,
}: ParamsType) =>
  new Promise<void>(async resolve => {
    await i18next.use(ICU).init({
      // because if debug is false and isDev is true - not to get "true"
      debug: typeof debug === 'boolean' ? debug : isDev,
      lng: locale,
      ns: [appNamespace],
      lowerCaseLng: true,
      returnEmptyString: false,
      resources: { ...initialResources },
    });

    resolve();
  });

export const geti18NextSync = ({ appNamespace, locale, debug }: ParamsType) =>
  i18next.use(ICU).init({
    // because if debug is false and isDev is true - not to get "true"
    debug: typeof debug === 'boolean' ? debug : isDev,
    lng: locale,
    ns: appNamespace ? [appNamespace] : [],
    lowerCaseLng: true,
    returnEmptyString: false,
    resources: {},
  });
