import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthorizationsContext } from "@providers/Authorizations";
import ShoppingCartController from "@containers/ShoppingCartController";
import StackNavigation from "./stack";
import TabNavigation from "./tab";
// import {
//   AddItem
// } from "@pages/private";

const Stack = createStackNavigator();
export const routes = Object.freeze({
  GENERAL_TAB: "GeneralTab",
  GENERAL_STACK: "GeneralStack",
  INVENTORY: "Inventory",
  ORDERS: "Orders",
  PRODUCTS: "Products",
  ADD_ITEM: "AddItem",
});

const Private = () => {
  const { colors } = useTheme();
  const { getCompanyName } = useContext(AuthorizationsContext);
  const cardStyle = {
    backgroundColor: colors.background,
  };
  return (
    <Stack.Navigator
      initialRouteName={routes.GENERAL_TAB}
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: { backgroundColor: colors.header },
      }}
    >
      <Stack.Screen
        name={routes.GENERAL_TAB}
        component={TabNavigation}
        options={{
          title: getCompanyName(),
          cardStyle,
          headerRight: () => <ShoppingCartController />,
          headerRightContainerStyle: { marginRight: 20, height: "100%" },
        }}
      />
      <Stack.Screen
        name={routes.GENERAL_STACK}
        component={StackNavigation}
        options={{ cardStyle }}
      />
    </Stack.Navigator>
  );
};

export default Private;
