import React from "react";
import styles from "./Orders.style";
import OrderList from "@containers/OrderList";
import OrderDetail from "@containers/OrderDetail";
////<OrderDetail/>
/////<OrderList style={styleSheet.container}/>
const Orders = () => {
const styleSheet = styles();
  return (
    <OrderList style={styleSheet.container}/>
    
  );
};

export default Orders;
