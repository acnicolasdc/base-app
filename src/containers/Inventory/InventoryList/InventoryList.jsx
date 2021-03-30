import React from 'react'
import { View } from "react-native";
import { FlatList } from "react-native";
import InventoryItem from '@components/Inventory/InventoryItem'
import { useTheme, Text } from "react-native-paper";
import styles from "./InventoryList.style";
const array = [
  {
    NombreProducto: 'Televisor1',
    Precio: 50000,
    id: 1,
    QR:'',
    Cantidad:100,
    Descripcion: 'sdcsdc',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Juego de sala 001',
    Precio: 1575000,
    id: 2,
    QR:'',
    Cantidad:10,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Juego cama y nochero',
    Precio: 750000,
    id: 3,
    QR:'',
    Cantidad:10,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Televisor LG 52 pul.',
    Precio: 2500000,
    id: 4,
    QR:'',
    Cantidad:1,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Televiso5',
    Precio: 50000,
    id: 5,
    QR:'',
    Cantidad:100,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Televisor6',
    Precio: 50000,
    id: 6,
    QR:'',
    Cantidad:100,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Televisor7',
    Precio: 50000,
    id: 7,
    QR:'',
    Cantidad:100,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Televisor8',
    Precio: 50000,
    id: 8,
    QR:'',
    Cantidad:100,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  },
  {
    NombreProducto: 'Televisor9',
    Precio: 50000,
    id: 9,
    QR:'',
    Cantidad:100,
    Descripcion: 'sdcsdc sf',
    fechaEntrada:'21/03/2021'
  }
  
  
];

const InventoryList = () => {
  const { colors } = useTheme();
  const styleSheet = styles(colors);
    return (
      <View style={styleSheet.container}>
        <FlatList
        data={array}
        renderItem={({ item, index}) => (<InventoryItem info={item}/>)}
        keyExtractor={(item, index)=>index.toString()}

      />
      </View>
    )
}

export default InventoryList
