import React, { useState } from "react";
import makeId from '../../utils/makeId'


export const OrdersStorageContext = React.createContext({
  orders: [],
  addOrder: () => { },
  updateOrder:() => { }
});

const orderObject = (productList, costumerInfo) => ({
  state: 0,
  nameClient: costumerInfo.name,
  idClient: costumerInfo.id,
  email: costumerInfo.email,
  phone: costumerInfo.phone,
  total: costumerInfo.total,
  items: productList,
  number: makeId(),
})


const OrdersStorageProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const addOrder = (costumer, productList) => {
    if (!costumer || !productList) return;
    setOrders([...orders, orderObject(productList, costumer)]);
  }
  const updateOrder = (index) => {
    const oldOrders =[...orders]
    oldOrders[index] =  {...orders[index],state:1}
    setOrders(oldOrders)
    console.log(index)
  }
  return (
    <OrdersStorageContext.Provider
      value={{ orders, addOrder, updateOrder }}
    >
      {children}
    </OrdersStorageContext.Provider>
  );
};
export default OrdersStorageProvider;
