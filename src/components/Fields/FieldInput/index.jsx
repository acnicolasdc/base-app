import React from "react";
import { TextInput, useTheme } from "react-native-paper";
import style from "./FieldInput.style";

const FieldInput = ({ ...props }) => {
  const { colors } = useTheme();
  const styleSheet = style(colors);
  return (
    <TextInput
      mode="flat"
      autoCapitalize="none"
      style={styleSheet.fieldStructure}
      underlineColor={colors.placeholder}
      underlineColorAndroid={colors.placeholder}
      {...props}
    />
  );
};

export default FieldInput;
