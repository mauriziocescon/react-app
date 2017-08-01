import { updateIntl } from "react-intl-redux";
import { getConfigForLanguage } from "../i18n/configureLocale";

export const changeLanguage = (language) => (dispatch, getState) => {
  const config = getConfigForLanguage(language);

  dispatch(updateIntl({
    locale: config.locale,
    messages: config.messages
  }));
};

export const USER_TEXT_SEARCH = "USER_TEXT_SEARCH";

export const changeUserTextSearch = (textSearch) => {
  return {
    type: USER_TEXT_SEARCH,
    userTextSearch: textSearch
  };
};
