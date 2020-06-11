import i18next from 'i18next';
import ICU from 'i18next-icu';

type ParamsType = {
  appNamespace: string;
  locale: string;
};

const isDev = process.env.NODE_ENV !== 'production';

export const geti18Next = ({ appNamespace, locale }: ParamsType) =>
  new Promise(async resolve => {
    await i18next.use(ICU).init({
      debug: isDev,
      lng: locale,
      ns: [appNamespace],
      lowerCaseLng: true,
      returnEmptyString: false,
      resources: {},
    });

    resolve();
  });
