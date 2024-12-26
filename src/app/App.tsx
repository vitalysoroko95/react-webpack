import './styles/index.scss';

import { Link } from 'react-router-dom';

import { useTheme } from './providers/theme-provider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';

import AppRouter from './providers/router/ui/app-router';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Изменить тему</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
