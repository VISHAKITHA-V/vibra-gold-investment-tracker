import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const Colors = {
  light: {
    text: '#1b1b1b',
    background: '#ffffff',
    tint: '#ff8000',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#ff5e00',
  },
  dark: {
    text: '#f5f5f5',
    background: '#151515',
    tint: '#ff9b3d',
    icon: '#9ba1a6',
    tabIconDefault: '#9ba1a6',
    tabIconSelected: '#ff9b3d',
  },
} as const;

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.tint,
    secondary: Colors.light.tabIconSelected,
  },
};
