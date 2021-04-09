import React, { useState } from "react";
import makeId from '../../utils/makeId'


export const OrdersStorageContext = React.createContext({
  orders: [],
  addOrder: () => { },
});
// "number": 117,
// "nameClient": "Wrennie Castanho",
// "idClient": "3159700",
// "email": "wcastanho0@opera.com",
// "celular": "(200) 5717058",
// "items": [{}, {}, {}, {}],
// "total": 493867
const orderObject = (productList, costumerInfo) => ({
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
    if(!costumer || !productList) return;
    setOrders([...orders, orderObject(productList, costumer)]);
  }

  return (
    <OrdersStorageContext.Provider
      value={{ orders, addOrder}}
    >
      {children}
    </OrdersStorageContext.Provider>
  );
};

export default OrdersStorageProvider;
