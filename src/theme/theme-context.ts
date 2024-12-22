import { createContext, useContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (arg: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});


export const LOCAL_STORAGE_THEME_KEY = 'theme';
