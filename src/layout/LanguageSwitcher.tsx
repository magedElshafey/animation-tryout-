import { useTranslation } from "react-i18next";
import { useLanguage } from "@/store/LanguageProvider";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  return (
    <button
      className="hidden lg:block font-semibold"
      onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
    >
      {t(language)}
    </button>
  );
};

export default LanguageSwitcher;
