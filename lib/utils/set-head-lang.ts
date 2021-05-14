export const setHeadLang = (locale: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale;
  }
};
