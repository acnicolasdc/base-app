import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AvailableLoad from "./AvailableLoad.stack";
import ShoppingCartDetail from "@pages/private/ShoppingCartDetail";
import AddItem  from "@pages/private/AddItem";
import ScanBarcode from "@pages/private/ScanBarcode"
import Inventory from "@pages/private/Inventory"
const Stack = createStackNavigator();

export const routes = Object.freeze({
  AVAILABLE_LOAD: "AvailableLoad",
  SHOPPING_CART_DETAIL: "ShoppingCartDetail",
  FORM_ADD_PRODUCT:"AddItem",
  SCAN_BARCODE:"ScanBarcode",
  INVENTORY:"Inventory"
});

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.AVAILABLE_LOAD} component={AvailableLoad} />
      <Stack.Screen name={routes.SHOPPING_CART_DETAIL} component={ShoppingCartDetail} />
      <Stack.Screen name={routes.FORM_ADD_PRODUCT} component={AddItem} />
      <Stack.Screen name={routes.SCAN_BARCODE} component={ScanBarcode} />
      <Stack.Screen name={routes.INVENTORY} component={Inventory} />

    </Stack.Navigator>
  );
};

export default StackNavigation;
