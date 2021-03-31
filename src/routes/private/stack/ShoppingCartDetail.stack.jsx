import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export const routes = Object.freeze({
  SHOPPING_CART: "ShoppingCartDetail",
});

const ShoppingCartDetail = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.SHOPPING_CART}
        component={ShoppingCartDetail}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartDetail;
