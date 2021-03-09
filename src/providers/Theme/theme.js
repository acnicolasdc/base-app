import { DefaultTheme } from 'react-native-paper';

const pallet = {
  white001:'#FFFF',
  green001: '#2FD573',
  grey001:'#ECEBEC',
  grey002:'#424242',
  grey003:'#1C1C1E',
  purple001:'#D4CAE9',
  purple002: '#F5F3FB',
  purple003: '#38219C'
}

export const lightMode = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      secondary: '#0DE1F6',
      primary:'#6739BF',
      background:'#FFFF',
      background001: '#F2F2F2',
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
      background001: '#0D0D0D',
      onBackground:'#FFFF',
      accent: '#f1c40f',
      primary:'#6739BF',
      text:'#FFFF',
      placeholder:'rgba(255, 255, 255, 0.54)',
      pallet:pallet
    },
    dark: true,
};