import "./styles/index.scss";

import { useTheme } from "app/providers/theme-provider";
import { classNames } from "shared/lib/classNames/classNames";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Изменить тему</button>
      <AppRouter />
    </div>
  );
};

export default App;
