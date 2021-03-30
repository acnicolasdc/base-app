import { DefaultTheme } from "react-native-paper";

const pallet = {
  black001: "#000",
  white001: "#FFFF",
  green001: "#2FD573",
  grey001: "#ECEBEC",
  grey002:"#e3e4e5",
  grey003:"#686868",
  grey004: "#424242",
  grey005: "#1C1C1E",
  purple001: "#D4CAE9",
  purple002: "#F5F3FB",
  purple003: "#38219C",
  textTitle:"#686868",
  textSubtitle:"#d7d7d7",
  textDescription:"#1C1C1E",
  borderCard: "#ECEBEC",
  backgroundWrapIcon: "#F5F3FB",
  
};

export const lightMode = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    secondary: "#0DE1F6",
    primary: "#6739BF",
    background: "#FFFF",
    header: "#F2F2F2",
    tab: "#F2F2F2",
    background001: "#F2F2F2",
    accent: "#f1c40f",
    placeholder: "rgba(0, 0, 0, 0.24)",
    pallet: pallet,
   
   
  },
};

export const darkMode = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    secondary: "#0DE1F6",
    background: "#131313",
    header: "#0D0D0D",
    tab: "#0D0D0D",
    background001: "#0D0D0D",
    onBackground: "#FFFF",
    accent: "#f1c40f",
    primary: "#6739BF",
    text: "#FFFF",
    placeholder: "rgba(255, 255, 255, 0.54)",
    pallet: pallet,
    //textPrimary:"#686868",
    //textSecundary:"#e3e4e5",
    //textDescription:"#1C1C1E"
  },
  dark: true,
};
