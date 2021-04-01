import React from "react";
import styles from "./ProductCard.style";
import { TouchableHighlight, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { Fontisto } from "@expo/vector-icons";
import IconWrap from "../../Icons/IconWrap";

export const defaultProps = Object.freeze({
  INFO: {
    id: 1,
    name: "Product name",
    amount: 1,
    price: 1000,
  },
  ON_PRESS: () => alert("press!"),
  ADDED: false
});

const ProductCard = ({
  style,
  info = defaultProps.INFO,
  onPress = defaultProps.ON_PRESS,
  added = defaultProps.ADDED
}) => {
  const { pallet, colors } = useTheme();
  const styleSheet = styles(pallet, colors);
  const { id, name, amount, price} = info;
  const productContainerStyle = added?[styleSheet.container, styleSheet.containerSelected]:[styleSheet.container]
  return (
    <TouchableHighlight
      activeOpacity={0.1}
      underlayColor="#FFFF"
      onPress={() => onPress(info)}
      style={{ flex: 1, padding: "2%" }}
    >
      {id !== "blank" ? (
        <View style={[...productContainerStyle, style]}>
          <IconWrap>
            <Fontisto name="qrcode" size={50} color="black" />
          </IconWrap>
          <View style={styleSheet.textContent}>
            <Text style={(styleSheet.textTitle, styleSheet.textNameProduct)}>
              {name}{" "}
            </Text>
            <Text style={(styleSheet.textTitle, styleSheet.textAmountProduct)}>
              {amount}{" "}
            </Text>
            <Text style={(styleSheet.textTitle, styleSheet.textPriceProduct)}>
              ${price}{" "}
            </Text>
          </View>
        </View>
      ) : (
        <View style={[styleSheet.itemInvisible, style]}>
          <Text style={styleSheet.textTitle}></Text>
        </View>
      )}
    </TouchableHighlight>
  );
};
export default ProductCard;
