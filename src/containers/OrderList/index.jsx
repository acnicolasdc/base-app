import React, { useContext } from "react";
import { OrdersStorageContext } from "@providers/OrdersStorage";
import { FlatList, View } from "react-native";
import OrderCard from "@components/Order/OrderCard";
import orderData from "@data/orders";

const OrderList = ({}) => {
  const {
    orders
  } = useContext(OrdersStorageContext);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={orders}
        renderItem={({ item, index }) => {
        return <OrderCard info={item} style={{marginLeft:7, marginTop:15}} />}}
        keyExtractor={orderData.number}
      />
    </View>
  );
};

export default OrderList;
