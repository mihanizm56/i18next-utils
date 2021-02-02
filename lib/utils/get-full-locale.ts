import { LocalStorageWorker } from './localstorage-worker';

const FALLBACK_LANGUAGE = 'en';

export const getFullLocale = (): string =>
  (
    LocalStorageWorker.getItem('locale') ||
    window.navigator.language ||
    FALLBACK_LANGUAGE
  ).toLowerCase();
