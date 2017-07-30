import { updateIntl } from "react-intl-redux";
import { getMessagesForLanguage } from "../i18n/configureLocale";

export const changeLanguage = (language) => (dispatch, getState) => {
  const messages = getMessagesForLanguage(language);

  dispatch(updateIntl({
    language,
    messages
  }));
};
