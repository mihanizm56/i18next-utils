import { getBrowserCookie } from './get-browser-cookie';
import { LocalStorageWorker } from './localstorage-worker';

const FALLBACK_LANGUAGE = 'en';

export const getFullLocale = (isFromCookie?: boolean): string => {
  const baseFullLocale = isFromCookie
    ? getBrowserCookie('locale')
    : LocalStorageWorker.getItem('locale');

  return (
    baseFullLocale ||
    window.navigator.language ||
    FALLBACK_LANGUAGE
  ).toLowerCase();
};
