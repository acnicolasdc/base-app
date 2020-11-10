import { DefaultTheme } from 'react-native-paper';

const pallet = {
  green001: '#2FD573',
  grey001:'#ECEBEC',
}

export const lightMode = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      secondary: '#0DE1F6',
      primary:'#6739BF',
      background:'#FFFF',
      accent: '#f1c40f',
      placeholder: "rgba(0, 0, 0, 0.24)",
      pallet:pallet
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
      primary:'#6739BF',
      text:'#FFFF',
      placeholder:'rgba(255, 255, 255, 0.54)',
      pallet:pallet
    },
    dark: true,
};