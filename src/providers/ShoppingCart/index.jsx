import React, { useState } from "react";


export const ShoppingCartContext = React.createContext({
  addProduct: () => { },
  countProducts: 0,
  products: {},

});
const productObject = (product, count = 1) => ({
  id: product.id,
  info: product,
  count: count
})

const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  const addProduct = (newProduct) => {
    const isProduct = products[newProduct.id];
    if (isProduct) {
      const productUpdated = { ...isProduct, count: isProduct.count + 1 };
      setProducts({ ...products, [newProduct.id]: productUpdated })
    } else {
      setProducts({ ...products, [newProduct.id]: productObject(newProduct) })
    }
  }
  const getCountProducts = () => Object.values(products).length;

  return (
    <ShoppingCartContext.Provider
      value={{ products, addProduct, countProducts: getCountProducts() }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
