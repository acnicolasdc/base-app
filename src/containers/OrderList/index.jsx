import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import OrderCard from "@components/Order/OrderCard";
import orderData from "@data/orders";

const OrderList = ({}) => {

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={orderData}
        renderItem={({ item, index }) => <OrderCard info={item} style={{marginLeft:7, marginTop:15}} />}
        keyExtractor={orderData.number}
      />
    </View>
  );
};

export default OrderList;
