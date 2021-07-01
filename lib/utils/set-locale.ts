import { LocalStorageWorker } from './localstorage-worker';
import { setBrowserLocaleCookie } from './set-browser-locale-cookie';

type ParamsType = {
  locale: string;
  isFromCookie?: boolean;
};

export const setLocale = ({ locale, isFromCookie }: ParamsType) => {
  if (isFromCookie) {
    setBrowserLocaleCookie(locale);
  } else {
    LocalStorageWorker.setItem('locale', locale);
  }
};
