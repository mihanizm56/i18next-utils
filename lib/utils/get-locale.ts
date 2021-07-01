import { getFullLocale } from './get-full-locale';
import { getPartLocale } from './get-part-locale';

type ParamsType = {
  isFull?: boolean;
  isFromCookie?: boolean;
};

export const getLocale = (params?: ParamsType): string => {
  const isFromCookie = params && params.isFromCookie;

  const fullLocale = getFullLocale(isFromCookie);
  const partLocale = getPartLocale(fullLocale);

  return params && params.isFull ? fullLocale : partLocale;
};
