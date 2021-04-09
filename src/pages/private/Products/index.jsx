import React from "react";
import ProductList from "@containers/ProductList";
import { View } from "react-native";
import ShoppingCart from "@containers/ShoppingCart/"
import ButtonCount from "@components/Button/ButtonCount"

/////<ShoppingCart/>
///// 
const Products = () => {
  return (
    <View style={{ backgroundColor: 'white', flex:1}}>
    <ProductList />
    </View>
  );
};

export default Products;
