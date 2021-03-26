import React from "react";
import { useNavigation } from "@react-navigation/native";
import LayoutFrame from "@components/Layout/LayoutFrame";
import styles from "./Product.style";
import ProductCard from "@components/Product/ProductCard"
import FieldSearchBar from "../../../components/Field/FieldSearchBar/FieldSearchBar";
import { FlatList } from "react-native";

const array = [
  {
  NombreProducto:'Televisor1',
  Precio:50000,
  Descripcion:'sdcsdc sf',
  id:1
  },
  {
    NombreProducto:'Televisor2',
    Precio:60000,
    Descripcion:'sdcsdc sf',
    id:2
  },
  {
    NombreProducto:'Televisor3',
    Precio:80000,
    Descripcion:'sdcsdc sf',
    id:3
  }];

const styleSheet = styles();
const Products = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <LayoutFrame>
      <FieldSearchBar></FieldSearchBar>
       {
        array.map((value) => (<ProductCard key={value} style={styleSheet.wrapMargin} />))
      } 
    
    </LayoutFrame>
  );
};

export default Products;
