import React, { useState } from "react";
import makeId from '../../utils/makeId'
import productsDB from '../../data/products'

export const ProductsStorageContext = React.createContext({
  products: [],
  addProducts: () => { },
});
const productObject = (product) => ({
  id: makeId(),
  name: product.name,
  amount: product.amount,
  price: product.price,
  qr: product.qr,
  image:"https://mercaldas.vteximg.com.br/arquivos/ids/199918-400-400/CHICLE-ADAMS-De-Menta-17-4-20-Unidades-Caja_1215.jpg?v=637382419573030000",
  description: product.description,
  color:product.color,
  date:product.date
})
const ProductsStorageProvider = ({ children }) => {
  const [products, setProducts] = useState(productsDB);
  const addProducts = (newProduct) => {
    console.log("new product", newProduct)
    if(!newProduct) return;
    setProducts([...products, productObject(newProduct)]);
  }
  return (
    <ProductsStorageContext.Provider
      value={{ products, addProducts}}
    >
      {children}
    </ProductsStorageContext.Provider>
  );
};
export default ProductsStorageProvider;
