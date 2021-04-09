import React, { useState } from "react";


export const ShoppingCartContext = React.createContext({
  updateProduct: () => { },
  countProducts: 0,
  products: {},
  costumerInformation: {},
  updateCostumerInformation: () => { },
});
const productObject = (product, count = 1) => ({
  id: product.id,
  info: product,
  count: count
})
const costumerObject = (costumer) => ({
  name: costumer.name,
  id: costumer.id,
  phone: costumer.phone,
  email: costumer.email
})
const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [costumerInformation, setCostumerInformation] = useState({});

  const updateProduct = (newProduct, count) => {
    const isProduct = products[newProduct.id];
    if (isProduct) {
      const productUpdated = { ...isProduct, count: count };
      setProducts({ ...products, [newProduct.id]: productUpdated })
    } else {
      setProducts({ ...products, [newProduct.id]: productObject(newProduct) })
    }
  }
  const updateCostumerInformation = (costumer) => {
    if(!costumer) return;
    setCostumerInformation(costumerObject(costumer))
  }
  const getCountProducts = () => Object.values(products).length;

  return (
    <ShoppingCartContext.Provider
      value={{ products, updateProduct, countProducts: getCountProducts(), updateCostumerInformation, costumerInformation }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
