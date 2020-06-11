import { LocalStorageWorker } from './localstorage-worker';

export const getLocale = (): string =>
  (
    LocalStorageWorker.getItem('locale') ||
    window.navigator.language ||
    'en'
  ).toLowerCase();
