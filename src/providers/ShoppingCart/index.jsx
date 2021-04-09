import React, { useState } from "react";


export const ShoppingCartContext = React.createContext({
  updateProduct: () => { },
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

  const updateProduct = (newProduct, count) => {
    const isProduct = products[newProduct.id];
    if (isProduct) {
      const productUpdated = { ...isProduct, count: count };
      setProducts({ ...products, [newProduct.id]: productUpdated })
    } else {
      setProducts({ ...products, [newProduct.id]: productObject(newProduct) })
    }
  }
  const getCountProducts = () => Object.values(products).length;

  return (
    <ShoppingCartContext.Provider
      value={{ products, updateProduct, countProducts: getCountProducts() }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
