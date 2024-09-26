import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import InventoryList from "@containers/Inventory/InventoryList"
import styles from "./Inventory.style";
import { routes, subRoutes } from "@routes/private";
import ButtonCommonSmall from "@components/Button/ButtonCommonSmall";


const Inventory = () => {
  const styleSheet = styles();
  const navigation = useNavigation();

  return (
    
      <View style={{ paddingLeft: 15,  flex:1, backgroundColor:'white' }}>
        <InventoryList />
        <View style={styleSheet.boxButton}>
        <ButtonCommonSmall
        onPress={() =>
        navigation.navigate(routes.GENERAL_STACK, {
          screen: subRoutes.GENERAL_STACK.FORM_ADD_PRODUCT,
        })
      }
      style={styleSheet.btnNew}><Text style={styleSheet.txtBtn}>NUEVO PRODUCTO</Text>
      </ButtonCommonSmall>
        </View>
      </View>
    
  );
};

export default Inventory;
