import { useTranslation } from "react-i18next";

const Translation = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return {
    t,
    changeLanguage,
    activeLanguage: i18n.language
  };
};

export default Translation;