import { getFullLocale } from './get-full-locale';
import { getPartLocale } from './get-part-locale';

export const getLocale = (): string => {
  const fullLocale = getFullLocale();
  const partLocale = getPartLocale(fullLocale);

  return partLocale;
};
