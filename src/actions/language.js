import { updateIntl } from 'react-intl-redux';
import { getConfigForLanguage } from '../i18n/configureLocale';

export const changeLanguage = (language) => (dispatch, getState) => {
  const config = getConfigForLanguage(language);

  dispatch(updateIntl({
    locale: config.locale,
    messages: config.messages,
  }));
};
