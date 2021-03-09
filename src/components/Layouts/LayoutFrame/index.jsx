import React from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const themeLayoutFrame = Object.freeze({
  GRAY_AND_DARK: 'GRAY_AND_DARK',
})

export const defaultProps = Object.freeze({
    STYLE: {},
    THEME_LAYOUT: undefined,
});


const LayoutFrame = ({ children, style = defaultProps.STYLE, themeLayout = defaultProps.THEME_LAYOUT}) => {
  const { colors } = useTheme();
  const chooseThemeLayoutFrame = () => {
    switch (themeLayout) {
      case themeLayoutFrame.GRAY_AND_DARK:        
        return colors.background001;
      default:
        return colors.background;
    }
  }
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: chooseThemeLayoutFrame(), paddingHorizontal: 20}, style]}>{children}</SafeAreaView>
  );
};

export default LayoutFrame;
