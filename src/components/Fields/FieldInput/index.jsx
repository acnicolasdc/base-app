import React from "react";
import { TextInput, useTheme } from "react-native-paper";
import styles from "./FieldInput.style";

const FieldInput = ({ style, ...props }) => {
  const { colors } = useTheme();
  const styleSheet = styles(colors);
  return (
    <TextInput
      mode="flat"
      autoCapitalize="none"
      style={[styleSheet.fieldStructure, style]}
      underlineColor={colors.placeholder}
      underlineColorAndroid={colors.placeholder}
      {...props}
    />
  );
};

export default FieldInput;
