import React from "react";
import { TextInputMask } from "react-native-masked-text";
import { TextInput, useTheme } from "react-native-paper";
import styles from "./FieldInputPhone.style";

const FieldInputPhone = ({ style, ...restProps }) => {
  const { colors } = useTheme();
  const styleSheet = styles(colors);
  return (
    <TextInput
      mode="flat"
      autoCapitalize="none"
      style={[styleSheet.fieldStructure, style]}
      underlineColor={colors.placeholder}
      underlineColorAndroid={colors.placeholder}
      render={(props) => (
        <TextInputMask
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(+99) | ",
          }}
          keyboardType='phone-pad'
          returnKeyType='done' 
          {...props}
        />
      )}
      {...restProps}
    />
  );
};

export default FieldInputPhone;
