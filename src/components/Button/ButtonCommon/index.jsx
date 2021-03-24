import React from "react";
import { Button } from "react-native-paper";

const ButtonCommon = ({ children, style, ...restProps }) => {
  return (
    <Button
      mode="contained"
      style={{
        borderRadius: "50%",
        ...style,
      }}
      contentStyle={{
        paddingVertical: 15,
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default ButtonCommon;
