import React from "react";
import styles from "./ProductCard.style";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';
import IconWrap from "../../Icons/IconWrap/IconWrap";

export const defaultProps = Object.freeze({
  INFO: {
    nombreProducto: 'Product Name',
    cantidad: 1,
    precio: 0,
    id: 0
  },
});

const ProductCard = ({ style, info: { nombreProducto, cantidad, precio, id } = defaultProps.INFO }) => {
  const { pallet, colors } = useTheme();
  const styleSheet = styles(pallet, colors);
  console.log(id)

  return (
    <View style={{ flex: 1, padding: "2%" }}>
      {
        id !== 'blank' ?
          <View style={[styleSheet.container, style]}>
            <IconWrap>
              <Fontisto name="qrcode" size={50} color="black" />
            </IconWrap>
            <View style={styleSheet.textContent}>
              <Text style={styleSheet.textTitle, styleSheet.textNameProduct}>{nombreProducto} </Text>
              <Text style={styleSheet.textTitle, styleSheet.textAmountProduct}>{cantidad} </Text>
              <Text style={styleSheet.textTitle, styleSheet.textPriceProduct}>${precio} </Text>
            </View>
          </View>
          :

          <View style={[
            styleSheet.itemInvisible, style]}>
            <Text style={styleSheet.textTitle}></Text>
          </View>
      }
    </View>
  )
  /*   <View style={[
      styleSheet.container, style]}>
      <Text style={styleSheet.textTitle}>ID: {id} </Text>\
    </View> */

};
export default ProductCard;
