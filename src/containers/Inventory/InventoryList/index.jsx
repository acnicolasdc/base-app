import React, {useEffect, useState, useContext}  from 'react'
import { FlatList } from "react-native";
import InventoryItem from '@components/Inventory/InventoryItem'
import productData from "@data/products";
import { useTheme } from "react-native-paper";
import { ProductsStorageContext } from "@providers/ProductsStorage";



const InventoryList = () => {
  const { pallet, colors } = useTheme();
  const { products: productsDB } = useContext(ProductsStorageContext);
  const [products, setProducts] = useState(productsDB);

  useEffect(() => {
    setProducts(productsDB);
  }, [productsDB]);
  
  return (
    <FlatList
    style={{ 
            flexDirection: 'column',
            borderColor: colors.pallet.borderCard,
            borderRadius: 25,
            marginHorizontal: 20,
            borderWidth: 1,
            marginVertical: 15,
            paddingHorizontal: 15,
            marginBottom:90,
}}
      data={productsDB}
      renderItem={({ item, index }) => (<InventoryItem info={item} />)}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default InventoryList
