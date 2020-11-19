export class LocalStorageWorker {
  static setItem = (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value));

  static getItem = (key: string) => {
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
