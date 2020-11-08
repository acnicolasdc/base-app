import { DefaultTheme } from 'react-native-paper';

export const lightMode = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0DE1F6',
      secondary:'#311D95',
      background:'#FFFF',
      accent: '#f1c40f',
    },
};

export const darkMode = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0DE1F6',
      background:'#131313',
      onBackground:'#FFFF',
      accent: '#f1c40f',
      secondary:'#311D95',
    },
};