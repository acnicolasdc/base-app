import React from "react";
import { TouchableOpacity } from "react-native";
import { Badge } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export const defaultProps = Object.freeze({
  SIZE: 40,
  COUNT: 0,
});

const ButtonShoppingCart = ({
  count = defaultProps.COUNT,
  size = defaultProps.SIZE,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Badge
        style={{
          position: "absolute",
          zIndex: 1,
          elevation: 1,
          top: 0,
        }}
        size={size / 2.3}
      >
        {count}
      </Badge>
      <FontAwesome name="shopping-basket" size={size / 1.9} color="black" />
    </TouchableOpacity>
  );
};

export default ButtonShoppingCart;
