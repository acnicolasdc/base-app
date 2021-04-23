import React from 'react'
import { FlatList } from "react-native";
import InventoryItem from '@components/Inventory/InventoryItem'
import productData from "@data/products";
import { useTheme } from "react-native-paper";


const InventoryList = () => {
  const { pallet, colors } = useTheme();
  return (
    <FlatList
    style={{ 
            flexDirection: 'column',
            borderColor: colors.pallet.borderCard,
            borderRadius: 25,
            marginHorizontal: 20,
            borderWidth: 1,
            marginVertical: 10,
            padding: 15,
}}
      data={productData}
      renderItem={({ item, index }) => (<InventoryItem info={item} />)}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default InventoryList
