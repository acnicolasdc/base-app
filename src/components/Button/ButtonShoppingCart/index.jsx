import React from "react";
import { TouchableOpacity } from "react-native";
import { Badge } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export const defaultProps = Object.freeze({
  SIZE: 40,
  COUNT: 0,
  ON_PRESS: () => alert('press!')
});

const ButtonShoppingCart = ({
  count = defaultProps.COUNT,
  size = defaultProps.SIZE,
  onPress = defaultProps.ON_PRESS
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
