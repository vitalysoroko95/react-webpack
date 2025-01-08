import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";
import { useTheme } from "app/providers/theme-provider";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { Sidebar } from "widgets/sidebar/ui/sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
