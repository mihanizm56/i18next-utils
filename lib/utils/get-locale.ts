import { getFullLocale } from './get-full-locale';
import { getPartLocale } from './get-part-locale';

type ParamsType = {
  isFull?: boolean;
};

export const getLocale = (params?: ParamsType): string => {
  const fullLocale = getFullLocale();
  const partLocale = getPartLocale(fullLocale);

  return params && params.isFull ? fullLocale : partLocale;
};
