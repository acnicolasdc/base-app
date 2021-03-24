import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import styles from "./Product.style";
import ProductCard from "@components/Product/ProductCard"

const array = [1, 2, 3];
const styleSheet = styles();
const Products = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <LayoutFrame>
      <Subheading>{"Modulo para agregar productos a una orden"}</Subheading>
      {array.map((value)=>(<ProductCard key={value} style={styleSheet.wrapMargin}/>))

      }
    </LayoutFrame>
  );
};

export default Products;
