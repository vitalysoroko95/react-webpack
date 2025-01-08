import { classNames } from "shared/lib/classNames/classNames";

import cls from "./theme-switcher.module.scss";
import { Theme, useTheme } from "app/providers/theme-provider";

import LightIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/moon.svg";
import { Button, ThemeButton } from "shared/ui/button/button";
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.GHOST}
      className={classNames(cls.themeSwitcherButton, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <LightIcon />
      ) : (
        <DarkIcon width={48} height={48} />
      )}
    </Button>
  );
};
