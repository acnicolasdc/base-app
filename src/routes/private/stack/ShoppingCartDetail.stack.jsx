import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from "@pages/UnderConstruction";

const Stack = createStackNavigator();

export const routes = Object.freeze({
  SHOPPING_CART: "ShoppingCartDetail",
});

const ShoppingCartDetail = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.SHOPPING_CART}
        component={(props) => (
          <MockPage {...props} pageName={routes.SHOPPING_CART} />
        )}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartDetail;
