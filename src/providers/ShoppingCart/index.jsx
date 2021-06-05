import React, { useState } from "react";

export const ShoppingCartContext = React.createContext({
  updateProduct: () => {},
  countProducts: 0,
  products: {},
  cleanShoppingCart: () => {},
  deleteItemById: () => {},
});
const productObject = (product, count = 1) => ({
  id: product.id,
  info: product,
  count: count,
});

const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [productsOrder, setProductsOrders] = useState({});

  const updateProduct = (newProduct, count) => {
    const isProduct = products[newProduct.id];
    if (isProduct) {
      if (count === 0) {
        const removedProductList = {
          ...products,
        };
        delete removedProductList[newProduct.id];
        setProducts(removedProductList);
        setProductsOrders(removedProductList);
      } else {
        const productUpdated = {
          ...isProduct,
          count: count,
        };
        setProducts({
          ...products,
          [newProduct.id]: productUpdated,
        });
        setProductsOrders({
          ...products,
          [newProduct.id]: productUpdated,
        });
      }
    } else {
      setProducts({
        ...products,
        [newProduct.id]: productObject(newProduct),
      });
      setProductsOrders({
        ...products,
        [newProduct.id]: productObject(newProduct),
      });
    }
  };
  const deleteItemById = (id) => {
    const filteredData = Object.values(products).filter(
      (product) => product.id != id
    );
    setProducts(filteredData);
    setProductsOrders(filteredData);
  };

  const cleanShoppingCart = () => {
    setProducts({});
  };
  const getCountProducts = () => Object.values(products).length;
  return (
    <ShoppingCartContext.Provider
      value={{
        deleteItemById,
        productsOrder,
        products,
        updateProduct,
        countProducts: getCountProducts(),
        cleanShoppingCart,
      }}
    >
      {children}{" "}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
