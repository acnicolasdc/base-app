import React from "react";
import { useNavigation } from "@react-navigation/native";
import LayoutFrame from "@components/Layout/LayoutFrame";
import styles from "./Product.style";
import ProductCard from "@components/Product/ProductCard"
import FieldSearchBar from "@components/Field/FieldSearchBar/FieldSearchBar";
import { FlatList, Dimensions } from "react-native";
const styleSheet = styles();
const array = [
  {
    NombreProducto: 'Televisor1',
    Precio: 50000,
    Descripcion: 'sdcsdc sf',
    id: 1
  },
  {
    NombreProducto: 'Televisor2',
    Precio: 60000,
    Descripcion: 'sdcsdc sf',
    id: 2
  },
  {
    NombreProducto: 'Televisor3',
    Precio: 80000,
    Descripcion: 'sdcsdc sf',
    id: 3
  },
  {
    NombreProducto: 'Televisor4',
    Precio: 40000,
    Descripcion: 'sdcsdc sf',
    id: 4
  },
  {
    NombreProducto: 'Televisor5',
    Precio: 550000,
    Descripcion: 'sdcsdc sf',
    id: 5
  },
  {
    NombreProducto: 'Televisor6',
    Precio: 560000,
    Descripcion: 'sdcsdc sf',
    id: 6
  },
  {
    NombreProducto: 'Televisor7',
    Precio: 550000,
    Descripcion: 'sdcsdc sf',
    id: 7
  },
  {
    NombreProducto: 'Televisor8',
    Precio: 550000,
    Descripcion: 'sdcsdc sf',
    id: 8
  },
  {
    NombreProducto: 'Televisor9',
    Precio: 550000,
    Descripcion: 'sdcsdc sf',
    id: 9
  }
  
  
];
const numColumns = 2;
const WIDTH = Dimensions.get('window').width

formatData= (array, numColumns) => {
  const totalRows = Math.floor(array.length / numColumns)
  let totalLastRow = array.length- (totalRows * numColumns)
  while(totalLastRow !==0 && totalLastRow !== numColumns){
    array.push({id: 'blank', empty: true})
    totalLastRow++
  }
  return array
}


const Products = () => {
  const navigation = useNavigation();
  console.log(WIDTH);
  return (
    <LayoutFrame>
      <FieldSearchBar/>
      {/*   {
        array.map((value) => (<ProductCard key={value} style={styleSheet.wrapMargin} />))
      }  */}
      <FlatList
        data={formatData(array, numColumns)}
        renderItem={({ item, index}) => (<ProductCard info={item}/>)}
        keyExtractor={(item, index)=>index.toString()}
        numColumns={numColumns}
      />

    </LayoutFrame>
  );
};

export default Products;
