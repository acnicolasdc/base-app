import React from 'react'
import { FlatList } from "react-native";
import InventoryItem from '@components/Inventory/InventoryItem'
import productData from "@data/products";

const InventoryList = () => {
  return (
    <FlatList
      data={productData}
      renderItem={({ item, index }) => (<InventoryItem info={item} />)}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default InventoryList
