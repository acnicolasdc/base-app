import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import InventoryList from "@containers/Inventory/InventoryList"
import styles from "./Inventory.style";
import { routes, subRoutes } from "@routes/private";
import ButtonCommon from "@components/Button/ButtonCommon";


const Inventory = () => {
  const styleSheet = styles();
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingLeft: 15, flex:1 }}>
        <InventoryList />
        <View style={styleSheet.boxButton}>
        <ButtonCommon
        onPress={() =>
        navigation.navigate(routes.GENERAL_STACK, {
          screen: subRoutes.GENERAL_STACK.FORM_ADD_PRODUCT,
        })
      }
      style={styleSheet.btnNew}><Text style={styleSheet.txtBtn}>NUEVO PRODUCTO</Text>
      </ButtonCommon>
        </View>
      </View>
    </View>
  );
};

export default Inventory;
