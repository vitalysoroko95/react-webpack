import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return <>{t("О нас")}</>;
};

export default AboutPage;
