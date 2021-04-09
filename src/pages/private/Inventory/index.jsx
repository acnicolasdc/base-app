import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import InventoryList from "@containers/Inventory/InventoryList"
import styles from "./Inventory.style";
import { routes, subRoutes } from "@routes/private";
import FormAddProduct from "@containers/Forms/FormAddProduct"
import ButtonCommon from "@components/Button/ButtonCommon";

///<FormAddProduct/>
///<InventoryList/>
///<ProductDetail/>
const Inventory = () => {
  const styleSheet = styles();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingLeft: 15, flex:1 }}>
        <InventoryList />
        <ButtonCommon
        onPress={() =>
        navigation.navigate(routes.GENERAL_STACK, {
          screen: subRoutes.GENERAL_STACK.FORM_ADD_PRODUCT,
        })
      }
         style={{width:"50%", alignSelf:'center', marginBottom:5}}>NUEVO</ButtonCommon>
      </View>
    </View>
  );
};

export default Inventory;
