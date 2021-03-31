import React from "react";
import ProductList from "@containers/ProductList";
import { View } from "react-native";
import ShoppingCart from "@containers/ShoppingCart/"
/////<ShoppingCart/>
///// <ProductList />
const Products = () => {
  return (
    <View style={{ backgroundColor: 'white', flex:1}}>
    <ProductList />
    </View>
  );
};

export default Products;
