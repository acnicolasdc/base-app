import React from "react";
import ProductList from "@containers/ProductList";
import { View } from "react-native";
import ShoppingCart from "@containers/ShoppingCart/"

const ShoppingCartDetail = () => {
  return (
    <View style={{ backgroundColor: 'white', flex:1}}>
   <ShoppingCart/>
    </View>
  );
};

export default ShoppingCartDetail;
