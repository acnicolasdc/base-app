import React from 'react'
import InventoryItem from '@components/Inventory/InventoryItem'
import { FlatList } from "react-native";
const array = [
    {
      NombreProducto: 'Televisor1',
      Precio: 50000,
      Descripcion: 'sdcsdc sf',
      id: 1
    },
    {
      NombreProducto: 'Televisor2',
      Precio: 60000,
      Descripcion: 'sdcsdc sf',
      id: 2
    },
    {
      NombreProducto: 'Televisor3',
      Precio: 80000,
      Descripcion: 'sdcsdc sf',
      id: 3
    },
    {
      NombreProducto: 'Televisor4',
      Precio: 40000,
      Descripcion: 'sdcsdc sf',
      id: 4
    },
    {
      NombreProducto: 'Televisor5',
      Precio: 550000,
      Descripcion: 'sdcsdc sf',
      id: 5
    },
    {
      NombreProducto: 'Televisor6',
      Precio: 560000,
      Descripcion: 'sdcsdc sf',
      id: 6
    },
    {
      NombreProducto: 'Televisor7',
      Precio: 550000,
      Descripcion: 'sdcsdc sf',
      id: 7
    },
    {
      NombreProducto: 'Televisor8',
      Precio: 550000,
      Descripcion: 'sdcsdc sf',
      id: 8
    },
    {
      NombreProducto: 'Televisor9',
      Precio: 550000,
      Descripcion: 'sdcsdc sf',
      id: 9
    }
    
    
  ];
const InventoryList = () => {
    return (
        <FlatList
        data={array}
        renderItem={({ item, index}) => (<InventoryItem info={item}/>)}
        keyExtractor={(item, index)=>index.toString()}

      />
    )
}

export default InventoryList
