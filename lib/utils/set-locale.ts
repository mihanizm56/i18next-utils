import { LocalStorageWorker } from './localstorage-worker';

export const setLocate = (locale: string) =>
  LocalStorageWorker.setItem('locale', locale);
