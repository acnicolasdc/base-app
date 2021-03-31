import React, { useContext } from 'react';
import { ShoppingCartContext } from "@providers/ShoppingCart";
import ButtonShoppingCart from "@components/Button/ButtonShoppingCart";

const ShoppingCartController = () => {
    const { countProducts } = useContext(ShoppingCartContext);
    return (
        <ButtonShoppingCart count={countProducts}/>
    )
}

export default ShoppingCartController
