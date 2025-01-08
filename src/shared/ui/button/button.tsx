import { classNames } from "shared/lib/classNames/classNames";

import cls from "./button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import { Theme } from "app/providers/theme-provider";

export enum ThemeButton {
  GHOST = "ghost",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
