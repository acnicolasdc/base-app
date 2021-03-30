import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import LayoutFrame from "@components/Layout/LayoutFrame";
import InventoryList from "@containers/Inventory/InventoryList/InventoryList"
import ButtonCommon from "@components/Button/ButtonCommon";
import styles from "./Inventory.style";
import { routes } from "@routes/private";
import FormAddProduct from "@containers/Inventory/FormAddProduct"
const Inventory = () => {
  const styleSheet = styles();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <LayoutFrame >

      <ButtonCommon
        style={{
          width: "50%",
          marginBottom: "2%",
          marginTop: 0,
          alignSelf: 'center',
          paddingVertical: 0,
        }}
      // onPress={() =>
      // navigation.navigate(routes.ADD_ITEM, {
      //</LayoutFrame>  pushRoute: routes.LOGIN,
      //  })
      // }
      >
        AGREGAR
        </ButtonCommon>
      <View style={styleSheet.container}></View>
        <InventoryList />
      
    </LayoutFrame>
  );
};

export default Inventory;
