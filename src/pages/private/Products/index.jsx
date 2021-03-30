import React from "react";
import { useNavigation } from "@react-navigation/native";
import LayoutFrame from "@components/Layout/LayoutFrame";
import styles from "./Product.style";
import ProductCard from "@components/Product/ProductCard"
import FieldSearchBar from "@components/Field/FieldSearchBar/FieldSearchBar";
import { FlatList, Dimensions, View } from "react-native";
import ShoppingCart from "../../../containers/ShoppingCart/ShoppingCart";
import ProductPresentation from "../../../containers/Product/ProductPresentation";
const styleSheet = styles();
const array = [
  {
    nombreProducto: 'Televisor 1',
    precio: 550000,
    id: 1,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc',
  },
  {
    nombreProducto: 'Televisor2',
    precio: 75000,
    id: 2,
    QR:'',
    cantidad:10,
    descripcion: 'sdcsdc sf'
  },
  {
    nombreProducto: 'Televisor1',
    precio: 50000,
    id: 3,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc sf'
  },
  {
    nombreProducto: 'Televisor1',
    precio: 50000,
    id: 4,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc sf'
  },
  {
    nombreProducto: 'Televisor1',
    precio: 50000,
    id: 5,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc sf'
  },
  {
    nombreProducto: 'Televisor1',
    precio: 50000,
    id: 6,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc sf'
  },
  {
    nombreProducto: 'Televisor1',
    precio: 50000,
    id: 7,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc sf'
  },
  {
    nombreProducto: 'Televisor1',
    precio: 50000,
    id: 8,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc sf'
  },
  {
    nombreProducto: 'Televisor1',
    precio: 50000,
    id: 9,
    QR:'',
    cantidad:100,
    descripcion: 'sdcsdc sf'
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
  
      <View style={{width:"100%", height:"100%"}}>
   {/*    <ShoppingCart/> */}
   
     <FieldSearchBar/> 
     <LayoutFrame>
  
       <FlatList
        data={formatData(array, numColumns)}
        renderItem={({ item, index}) => (<ProductCard info={item}/>)}
        keyExtractor={(item, index)=>index.toString()}
        numColumns={numColumns}
      /> 

  {/*     <ProductPresentation></ProductPresentation> */}
     
    </LayoutFrame>
    </View>
  );
};

export default Products;
