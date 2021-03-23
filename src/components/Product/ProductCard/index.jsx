import React from "react";
import styles from "./ProductCard.style";
import { View } from "react-native";

const ProductCard = ({style}) => {
  const styleSheet = styles();
  return (
    <View style={[styleSheet.container, style]}>
    </View>
  );
};

export default ProductCard;
