import { addLocaleData } from 'react-intl';
import * as de from 'react-intl/locale-data/de';
import * as en from 'react-intl/locale-data/en';
import * as it from 'react-intl/locale-data/it';

import * as deConfig from '../../assets/i18n/de.json';
import * as enConfig from '../../assets/i18n/en.json';
import * as itConfig from '../../assets/i18n/it.json';

export const availableLanguages = ['de', 'en', 'it'];
export const defaultLanguage = 'en';

export const getConfigForLanguage = (language: string) => {
  switch (language) {
    case 'de':
      const deConfiguration: any = deConfig;
      return deConfiguration as { locale: string, messages: { [key: string]: string } };
    case 'it':
      const itConfiguration: any = itConfig;
      return itConfiguration as { locale: string, messages: { [key: string]: string } };
    default:
      const enConfiguration: any = enConfig;
      return enConfiguration as { locale: string, messages: { [key: string]: string } };
  }
};

export const configureLocale = (preloadedState?: any) => {
  addLocaleData([...de, ...en, ...it]);

  return {
    ...preloadedState,
    intl: getConfigForLanguage(defaultLanguage),
  };
};
