import { DefaultTheme } from 'react-native-paper';

export const lightMode = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      secondary: '#0DE1F6',
      primary:'#311D95',
      background:'#FFFF',
      accent: '#f1c40f',
      placeholder: "rgba(0, 0, 0, 0.24)"
    },
};

export const darkMode = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      secondary: '#0DE1F6',
      background:'#131313',
      onBackground:'#FFFF',
      accent: '#f1c40f',
      primary:'#311D95',
      text:'#FFFF',
      placeholder:'rgba(255, 255, 255, 0.54)'
    },
    dark: true,
};