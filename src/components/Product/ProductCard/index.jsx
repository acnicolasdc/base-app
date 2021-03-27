import React from "react";
import styles from "./ProductCard.style";
import { View, Text } from "react-native";
import { Title } from "react-native-paper";

const ProductCard = ({ style, info = { info } }) => {
  const styleSheet = styles();
  console.log(info.id)

  return (
    <View  style={{flex:1, padding:"2%"}}>
      {
        info.id !== 'blank' ?

          <View style={[
            styleSheet.container, style]}>
            <Text style={styleSheet.textTitle}>ID: {info.id} </Text>
      </View>
          :

          <View style={[
            styleSheet.itemInvisible, style]}>
            <Text style={styleSheet.textTitle}>ID: {info.id} </Text>
        </View>
      }
    </View>
  )
  /*   <View style={[
      styleSheet.container, style]}>
      <Text style={styleSheet.textTitle}>ID: {info.id} </Text>\
    </View> */

};
export default ProductCard;
