import React from "react";
import ProductList from "@containers/ProductList";
import { View } from "react-native";
import FormAddProduct from "@containers/Forms/FormAddProduct"

const AddItem = () => {
  return (
    <View style={{ backgroundColor: 'white', flex:1}}>
     <FormAddProduct/>
    </View>
  );
};

export default AddItem;
