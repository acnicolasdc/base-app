import React, { useEffect, useState, useContext } from 'react'
import { Alert, FlatList } from "react-native";
import InventoryItem from '@components/Inventory/InventoryItem'
import { useTheme } from "react-native-paper";
import { ProductsStorageContext } from "@providers/ProductsStorage";


const InventoryList = () => {
  const { pallet, colors } = useTheme();
  const { products: productsDB, deleteItemById } = useContext(ProductsStorageContext);
  const [products, setProducts] = useState(productsDB);

  useEffect(() => {
    setProducts(productsDB);
  }, [productsDB]);

  const handleRemoveProduct = (index) => {
    deleteItemById(index)
  }

  return (
    <FlatList
      style={{
        flexDirection: 'column',
        borderColor: colors.pallet.borderCard,
        borderRadius: 25,
        marginHorizontal: 10,
        borderWidth: 1,
        marginTop: 15,
        paddingHorizontal: 15,
        marginBottom: 90,
       
      }}
      data={products}
      renderItem={({ item, index }) => (<InventoryItem
       
        onPress={ () => Alert.alert(
            "CUIDADO !",
            "Estas seguro que deseas eliminar este producto?",
            [
              {
                text: "Cancel",
                onPress: () => {null},
                style: "cancel"
              },
              { text: "OK", onPress: () => handleRemoveProduct(item.id) }
            ]
          )
        }
        info={item} />)}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default InventoryList
