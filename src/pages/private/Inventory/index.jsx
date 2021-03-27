import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import InventoryList from "@containers/Inventory/InventoryList/InventoryList"

const Inventory = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <LayoutFrame >
      <Title>{'Lista de Productos'}</Title>
      <InventoryList  style={{backgroundColor:'blue'}}/>
    </LayoutFrame>
  );
};

export default Inventory;
