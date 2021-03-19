import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import OrderCard from "@components/Order/OrderCard";
import styles from "./Orders.style";

const array = [1, 2, 3];
const Orders = () => {
  const navigation = useNavigation();
  const styleSheet = styles();
  console.log(navigation);
  return (
    <LayoutFrame>
      <Subheading>{`Please enter the phone number associated\nwith this account`}</Subheading>
      {array.map((value) => (
        <OrderCard key={value} style={styleSheet.wrapMargin} />
      ))}
    </LayoutFrame>
  );
};

export default Orders;
