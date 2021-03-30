import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import { FlatList } from "react-native";
import styles from "./Orders.style";
import OrderCard from "../../../components/Order/OrderCard"

const array = [
  {
    NombreCliente: 'Andres Yepez',
    NumIdentificacion:1144174047,
    Celular:'3154528784',
    Correo:'Anres@gmail.com',
    NumeroOrden: 1,
    items:[],
    Total: '$50.000',

  },
  {
    NombreCliente: 'Camilo Sanchez',
    NumIdentificacion:1144174047,
    Celular:'3194528784',
    Correo:'Camilo@gmail.com',
    NumeroOrden: 2,
    items:[],
    Total: '$1.540.000',
  },
  {
    NombreCliente: 'Natalia Portillo',
    NumIdentificacion:1144174047,
    Celular:'3024528784',
    Correo:'Natalia@gmail.com',
    NumeroOrden: 3,
    items:[
      
      "televisor1",
      "closetRimax"
      
    ],
    Total: '$850.000',
  },
  {
    NombreCliente: 'Roger Pino',
    NumIdentificacion:1144174047,
    Celular:'3204528784',
    Correo:'Roger@gmail.com',
    NumeroOrden: 4,
    items:[],
    Total: '$5.000',
  
  },
  {
    NombreCliente: 'Andres Perez',
    NumIdentificacion:1144174047,
    Celular:'3154528784',
    Correo:'pelele@gmail.com',
    NumeroOrden: 5,
    items:[],
    Total: '$84.540.000',
  }
];

const Orders = () => {
  const navigation = useNavigation();
  const styleSheet = styles();
  console.log(navigation);
  return (
    <LayoutFrame>
     
     {/*  {array.map((value) => (
        <OrderCard key={
        value} style={styleSheet.wrapMargin} />
      ))} */}
      <FlatList
        data={array}
        renderItem={({ item, index}) => (<OrderCard info={item} />)}
        keyExtractor={array.NumeroOrden}
      />
    </LayoutFrame>
  );
};

export default Orders;
