import React from "react";
import { TextInput, useTheme } from "react-native-paper";
import styles from "./FieldInput.style";

const FieldInput = ({ style, ...restProps }) => {
  const { colors } = useTheme();
  const styleSheet = styles(colors);
  return (
    <TextInput
      mode="flat"
      autoCapitalize="words"
      style={[styleSheet.fieldStructure, style]}
      underlineColor={colors.placeholder}
      underlineColorAndroid={colors.placeholder}
      {...restProps}
    />
  );
};

export default FieldInput;
