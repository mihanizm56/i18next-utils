import { LanguageObjectType } from '../_types';

export const LANGUAGES_META: Record<string, Record<string, string>> = {
  ru: {
    title: 'Русский',
  },
  en: {
    title: 'English',
  },
};

export const getFormattedLanguages = (
  pureLanguages: Array<string>,
): Array<LanguageObjectType> =>
  pureLanguages
    ? pureLanguages.map(language => ({
        id: language,
        value: LANGUAGES_META[language]
          ? LANGUAGES_META[language].title
          : language,
      }))
    : [];
