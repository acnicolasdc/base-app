import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import styles from "./Product.style";
import ProductCard from "@components/Product/ProductCard"

const styleSheet = styles();

const Products = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <LayoutFrame style={{}}>
      <Subheading>{"Modulo para agregar productos a una orden"}</Subheading>
      <ProductCard></ProductCard>

    </LayoutFrame>
  );
};

export default Products;
