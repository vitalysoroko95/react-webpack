import { classNames } from "shared/lib/classNames/classNames";

import cls from "./sidebar.module.scss";
import { useState } from "react";
import { Button } from "shared/ui/button/button";
import { ThemeSwitcher } from "shared/ui/theme-switcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>Side</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
