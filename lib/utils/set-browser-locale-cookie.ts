export const setBrowserLocaleCookie = (locale: string) => {
  document.cookie = `locale=${locale}; path=/; secure; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
};
