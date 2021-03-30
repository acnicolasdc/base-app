import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import InventoryList from "@containers/Inventory/InventoryList"
import ButtonCommon from "@components/Button/ButtonCommon";
import styles from "./Inventory.style";
import { routes } from "@routes/private";
import FormAddProduct from "@containers/Inventory/FormAddProduct"
const Inventory = () => {
  const styleSheet = styles();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styleSheet.buttonAdd} >
        <ButtonCommon
        >AGREGAR
        </ButtonCommon>
      </View>
      <View style={{ paddingLeft: 15 }}>
        <InventoryList />
      </View>


    </View>
  );
};

export default Inventory;
