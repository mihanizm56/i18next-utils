export const getPartLocale = (fullLocale: string): string =>
  fullLocale.replace(/^(\w{2})(.*)/, '$1');
