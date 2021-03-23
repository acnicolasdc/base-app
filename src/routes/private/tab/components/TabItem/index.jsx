import React from "react";
import { View } from "react-native";
import { useTheme, Paragraph } from "react-native-paper";
import style from "./TabItem.styles";

export const defaultProps = Object.freeze({
  FOCUSED: false,
  TITLE: "",
});

const TabItem = ({
  children,
  title = defaultProps.TITLE,
  focused = defaultProps.FOCUSED,
}) => {
  const { colors } = useTheme();
  const styleSheet = style(colors);

  return focused ? (
    <View style={styleSheet.tabContainer}>
      {children}
      <Paragraph style={styleSheet.label}>{title}</Paragraph>
    </View>
  ) : (
    children
  );
};

export default TabItem;
