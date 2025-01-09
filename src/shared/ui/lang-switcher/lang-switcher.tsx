import { classNames } from "shared/lib/classNames/classNames";

import cls from "./lang-switcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/button/button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames(cls["lang-switcher"], {}, [className])}>
      <Button theme={ThemeButton.GHOST} onClick={toggleLanguage}>
        {t("Язык")}
      </Button>
    </div>
  );
};
