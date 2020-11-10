import React from "react";
import { TextInput, useTheme } from "react-native-paper";

const FieldInput = ({ ...props }) => {
  const { colors } = useTheme();
  return (
    <TextInput
      mode="flat"
      autoCapitalize="none"
      style={{ backgroundColor: colors.backgroundColor, paddingBottom:0, marginBottom:0 }}
      underlineColor={colors.placeholder}
      underlineColorAndroid={colors.placeholder}
      {...props}
    />
  );
};

export default FieldInput;
