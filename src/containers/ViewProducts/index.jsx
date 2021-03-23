import React from "react";
import { View } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import ViewProduct from "@components/Product";

const ViewProducts = () => {
  return (
    <View>
      <SearchBar></SearchBar>
      <ViewProduct></ViewProduct>
    </View>
  );
};

export default ViewProducts;
