import React, { useContext } from "react";
import { OrdersStorageContext } from "@providers/OrdersStorage";
import { FlatList, View, Text } from "react-native";
import OrderCard from "@components/Order/OrderCard";
import orderData from "@data/orders";
import style from "./OrderList.style";
import { useTheme } from "react-native-paper";

const OrderList = ({ }) => {
  const { pallet, colors } = useTheme();
  const styleSheet = style(pallet, colors);
  const {
    orders
  } = useContext(OrdersStorageContext);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      { orders == 0 ?
        <View style={styleSheet.boxText}>
          <Text style={styleSheet.text}>
            No hay ordenes 
          </Text>
        </View> :
        <FlatList
          data={orders}
          renderItem={({ item, index }) => {
            return <OrderCard info={item} style={{ marginLeft: 7, marginTop: 15 }} />
          }}
          keyExtractor={orderData.number}
        />
      }
    </View>
  );
};

export default OrderList;
