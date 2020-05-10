import i18next from 'i18next';

type ParamsType = {
  appNamespace: string;
  locale: string;
};

export const geti18Next = ({ appNamespace, locale }: ParamsType) =>
  new Promise(async resolve => {
    await i18next.init({
      debug: true,
      lng: locale,
      ns: [appNamespace],
      returnEmptyString: false,
      resources: {},
    });

    resolve();
  });
