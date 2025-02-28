import React from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const defaultProps = Object.freeze({
    STYLE: {},
});


const LayoutFrame = ({ children, style = defaultProps.STYLE}) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: colors.background, paddingHorizontal: 20}, style]}>{children}</SafeAreaView>
  );
};

export default LayoutFrame;
