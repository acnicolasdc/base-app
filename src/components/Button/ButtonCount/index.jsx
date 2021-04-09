import React, { useState } from "react";
import styles from "./ButtonCount.style";
import { TouchableHighlight, Text, View } from "react-native";

import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

export const defaultProps = Object.freeze({
  COUNT: 0,
  GET_COUNT: () => {},
  LIMIT: 1,
  DISABLED: false,
});

const ButtonCount = ({
  count = defaultProps.COUNT,
  getCount = defaultProps.GET_COUNT,
  limit = defaultProps.LIMIT,
  disabled = defaultProps.DISABLED,
}) => {
  const { colors } = useTheme();
  const styleSheet = styles(colors);
  return (
    <View style={[styleSheet.container]}>
      <View style={[styleSheet.boxes, styleSheet.boxButton]}>
        <TouchableHighlight
          onPress={() => {
            if (count > 0) {
              getCount(count - 1);
            }
          }}
          activeOpacity={0.1}
          underlayColor={colors.pallet.purple003}
          style={{ borderRadius: 40 }}
        >
          <AntDesign name="minus" size={18} color="#fff" />
        </TouchableHighlight>
      </View>

      <View style={[styleSheet.boxes, styleSheet.boxCount]}>
        <Text style={styleSheet.text}>{count}</Text>
      </View>

      <View style={[styleSheet.boxes, styleSheet.boxButton]}>
        <TouchableHighlight
          style={{ borderRadius: 40 }}
          activeOpacity={0.1}
          underlayColor={colors.pallet.purple003}
          onPress={() => {
            if(!limit) {
              getCount(count+1)
            } else if(count < limit) {
              getCount(count+1)
            }
          }}
        >
          <AntDesign name="plus" size={18} color="#fff" />
        </TouchableHighlight>
      </View>
    </View>
  );
};
export default ButtonCount;
