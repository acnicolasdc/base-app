import React from "react";
import { Button } from "react-native-paper";

const ButtonCommonSmall = ({ children, style, ...restProps }) => {
  return (
    <Button
      mode="contained"
      style={{
        borderRadius: 50,
        ...style,
      }}
      contentStyle={{
        paddingVertical: 5,
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default ButtonCommonSmall;
