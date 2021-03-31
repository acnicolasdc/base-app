import React, { useContext } from "react";
import { ShoppingCartContext } from "@providers/ShoppingCart";
import ButtonShoppingCart from "@components/Button/ButtonShoppingCart";
import { routes, subRoutes } from "@routes/private";
import { useNavigation } from "@react-navigation/native";

const ShoppingCartController = () => {
  const navigation = useNavigation();
  const { countProducts } = useContext(ShoppingCartContext);
  return (
    <ButtonShoppingCart
      onPress={() =>
        navigation.navigate(routes.GENERAL_STACK, {
          screen: subRoutes.GENERAL_STACK.SHOPPING_CART_DETAIL,
        })
      }
      count={countProducts}
    />
  );
};

export default ShoppingCartController;
