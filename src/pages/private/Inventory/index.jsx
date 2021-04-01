import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import InventoryList from "@containers/Inventory/InventoryList"
import styles from "./Inventory.style";
import { routes } from "@routes/private";
import FormAddProduct from "@containers/Forms/FormAddProduct"
import ProductDetail from "../../../containers/ProductDetail";

///<FormAddProduct/>
///<InventoryList/>
///<ProductDetail/>
const Inventory = () => {
  const styleSheet = styles();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingLeft: 15 }}>
        <InventoryList />
      </View>
    </View>
  );
};

export default Inventory;
