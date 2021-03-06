export class LocalStorageWorker {
  static setItem = (key: string, value: string) =>
    typeof localStorage !== 'undefined' &&
    localStorage.setItem(key, JSON.stringify(value));

  static getItem = (key: string) => {
    if (typeof localStorage === 'undefined') {
      return 'empty';
    }

    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      try {
        const result = JSON.parse(storageValue);

        return result;
      } catch {
        return null;
      }
    }

    return storageValue;
  };
}
