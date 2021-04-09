import React, { useState } from "react";


export const ShoppingCartContext = React.createContext({
  updateProduct: () => { },
  countProducts: 0,
  products: {},
  cleanShoppingCart:() => { },
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
  const cleanShoppingCart = () => setProducts({});
  const getCountProducts = () => Object.values(products).length;

  return (
    <ShoppingCartContext.Provider
      value={{ products, updateProduct, countProducts: getCountProducts(), cleanShoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
