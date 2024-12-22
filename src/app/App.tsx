import { Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import { Link } from 'react-router-dom';

import { Suspense } from 'react';
import { useTheme } from './providers/theme-provider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Изменить тему</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
