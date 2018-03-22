import { addLocaleData } from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';

import deConfig from './de';
import enConfig from './en';
import itConfig from './it';

export const availableLanguages = ['de', 'en', 'it'];
export const defaultLanguage = 'en';

export const getConfigForLanguage = language => {
  switch (language) {
    case 'de':
      return deConfig;
    case 'it':
      return itConfig;
    default:
      return enConfig;
  }
};

const configureLocale = preloadedState => {
  addLocaleData([...de, ...en, ...it]);

  return {
    ...preloadedState,
    intl: getConfigForLanguage(defaultLanguage),
  };
};

export default configureLocale;
