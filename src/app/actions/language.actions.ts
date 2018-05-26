import { updateIntl } from 'react-intl-redux';
import { getConfigForLanguage } from '../i18n/configure-locale';

export const changeLanguage = (language: string) => (dispatch: any, getState: any) => {
  const config = getConfigForLanguage(language);

  dispatch(updateIntl({
    locale: config.locale,
    messages: config.messages,
  }));
};
