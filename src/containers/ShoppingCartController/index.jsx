import React, { useContext } from 'react';
import { ShoppingCartContext } from "@providers/ShoppingCart";
import ButtonShoppingCart from "@components/Button/ButtonShoppingCart";
import { routes} from '@routes/private/stack/ShoppingCartDetail.stack'
import { useNavigation } from "@react-navigation/native";

const ShoppingCartController = () => {
    const navigation = useNavigation();
    const { countProducts } = useContext(ShoppingCartContext);
    return (
        <ButtonShoppingCart 
        onPress={() => navigation.navigate(routes.SHOPPING_CART)}
        count={countProducts}/>
    )
}

export default ShoppingCartController
