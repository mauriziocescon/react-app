import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import it from "react-intl/locale-data/it";

import enConfig from "./en";
import itConfig from "./it";

export const getConfigForLanguage = language => {
  switch (language) {
    case "it":
      return itConfig;
    default:
      return enConfig;
  }
};

const configureLocale = preloadedState => {

  addLocaleData([...en, ...it]);

  return {
    ...preloadedState,
    intl: enConfig
  };
};

export default configureLocale;
