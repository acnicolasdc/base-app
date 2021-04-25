import React, { useState } from "react";
import makeId from '../../utils/makeId'
import productsDB from '../../data/products'

export const ProductsStorageContext = React.createContext({
  products: [],
  addProducts: () => { },
  deleteItemById: () => {}
});
const productObject = (product) => ({
  id: makeId(),
  name: product.name,
  amount: product.amount,
  price: product.price,
  qr: product.qr,
  image:product.image,
  description: product.description,
  color:product.color,
  date:product.date
})
const ProductsStorageProvider = ({ children }) => {
  const [products, setProducts] = useState(productsDB);
  const addProducts = (newProduct) => {
    if(!newProduct) return;
    setProducts([...products, productObject(newProduct)]);
  }

  const deleteItemById = (id) => {
    const filteredData = products.filter(product => product.id != id);
    setProducts(filteredData)
  }
  
  return (
    <ProductsStorageContext.Provider
      value={{ products, addProducts, deleteItemById}}
    >
      {children}
    </ProductsStorageContext.Provider>
  );
};
export default ProductsStorageProvider;
