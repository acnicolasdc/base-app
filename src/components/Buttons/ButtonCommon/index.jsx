import React from "react";
import { Button } from "react-native-paper";

const ButtonCommon = ({ children, style, ...props }) => {
  return (
    <Button
      mode="contained"
      style={{
        paddingVertical: 15,
        borderRadius: "50%",
        ...style,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonCommon;
