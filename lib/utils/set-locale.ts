import { LocalStorageWorker } from './localstorage-worker';

export const setLocale = (locale: string) =>
  LocalStorageWorker.setItem('locale', locale);
