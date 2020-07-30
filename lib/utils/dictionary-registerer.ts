import i18next from 'i18next';

export type DictionaryRegisterType = {
  name: string;
  dictionary: Record<string, string>;
};

interface IDictionaryRegisterer {
  setDictionary: (options: DictionaryRegisterType) => any;

  getDictionary: (options: string) => Record<string, string>;
}

export class DictionaryRegisterer implements IDictionaryRegisterer {
  [key: string]: Record<string, string>;

  // eslint-disable-next-line
  // @ts-ignore
  setDictionary({ name, dictionary }: DictionaryRegisterType) {
    const formattedDictionary = Object.keys(dictionary).reduce((acc, key) => {
      // eslint-disable-next-line
      // @ts-ignore
      acc[key] = i18next.t(dictionary[key]);

      return acc;
    }, {});

    this[name] = formattedDictionary;
  }

  // eslint-disable-next-line
  // @ts-ignore
  getDictionary = (name: string) => this[name];
}

export const dictionaryRegisterer = new DictionaryRegisterer();
