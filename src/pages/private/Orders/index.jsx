import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import { FlatList } from "react-native";
import styles from "./Orders.style";
import OrderCard from "../../../components/Order/OrderCard"

const array = [
  {
    NombreCliente: 'Cliente 1',
    NumeroOrden: 1,
    Descripcion: 'sdcsdc sf',
    id: 1
  },
  {
    NombreCliente: 'Cliente 2',
    NumeroOrden: 2,
    Descripcion: 'sdcsdc sf',
    id: 2
  },
  {
    NombreCliente: 'Cliente 3',
    NumeroOrden: 3,
    Descripcion: 'sdcsdc sf',
    id: 3
  },
  {
    NombreCliente: 'Cliente 4',
    NumeroOrden: 4,
    Descripcion: 'sdcsdc sf',
    id: 4
  },
  {
    NombreCliente: 'Cliente 5',
    NumeroOrden: 5,
    Descripcion: 'sdcsdc sf',
    id: 5
  }
];

const Orders = () => {
  const navigation = useNavigation();
  const styleSheet = styles();
  console.log(navigation);
  return (
    <LayoutFrame>
      <Subheading>{`Se muestran como tarjetas,las ordenes pendientes por ser aprobadas por el admin`}</Subheading>
     {/*  {array.map((value) => (
        <OrderCard key={
        value} style={styleSheet.wrapMargin} />
      ))} */}
      <FlatList
        data={array}
        renderItem={({ item, index}) => (<OrderCard info={item} />)}
        keyExtractor={array.id}
      />
    </LayoutFrame>
  );
};

export default Orders;
