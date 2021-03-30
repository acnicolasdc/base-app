import React from "react";
import styles from "./ProductCard.style";
import { TouchableOpacity, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';
import IconWrap from "../../Icons/IconWrap/IconWrap";

export const defaultProps = Object.freeze({
  INFO: {
    id: 1,
    name: "Product name",
    amount: 1,
    price: 1000,
  },
});

const ProductCard = ({ style, info: { id, name, amount, price } = defaultProps.INFO }) => {
  const { pallet, colors } = useTheme();
  const styleSheet = styles(pallet, colors);
  return (
    <TouchableOpacity onPress={() => alert('Pressed!')}
    style={{ flex: 1, padding: "2%" }}>
      {
        id !== 'blank' ?
          <View style={[styleSheet.container, style]}>
            <IconWrap>
              <Fontisto name="qrcode" size={50} color="black" />
            </IconWrap>
            <View style={styleSheet.textContent}>
              <Text style={styleSheet.textTitle, styleSheet.textNameProduct}>{name} </Text>
              <Text style={styleSheet.textTitle, styleSheet.textAmountProduct}>{amount} </Text>
              <Text style={styleSheet.textTitle, styleSheet.textPriceProduct}>${price} </Text>
            </View>
          </View>
          :
          <View style={[
            styleSheet.itemInvisible, style]}>
            <Text style={styleSheet.textTitle}></Text>
          </View>
      }
    </TouchableOpacity>
  )
};
export default ProductCard;
