import { classNames } from "shared/lib/classNames/classNames";

import cls from "./navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/app-link";
import { ThemeSwitcher } from "shared/ui/theme-switcher";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
