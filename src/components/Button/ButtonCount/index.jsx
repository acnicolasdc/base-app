import React, { useState } from "react";
import styles from "./ButtonCount.style";
import { TouchableHighlight, Text, View } from "react-native";

import { useTheme } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';



const ButtonCount = ({ }) => {
  const { pallet, colors } = useTheme();
  const styleSheet = styles(pallet, colors);
  const [count, setCount] = useState(0);
  const [colorButton, setColorButton] = useState(colors.pallet.grey002);
  const [colorContainer, setColorContainer] = useState(colors.pallet.grey002);
 
  return (
  
    <View style={[styleSheet.container, {borderColor:colorContainer}]}>
      <View style={[styleSheet.boxes, styleSheet.boxButton, {backgroundColor:colorButton}]}>
        <TouchableHighlight 
          onPress={() => { if (count > 0) { setCount(count - 1)}
          if(count<=1){setColorButton(colors.pallet.grey002), setColorContainer(colors.pallet.grey002) }}
          }
          activeOpacity={0.1}
          underlayColor={colors.pallet.purple003}
          style={{borderRadius:40}}
        >
          <AntDesign name="minus" size={18} color="#fff" />
        </TouchableHighlight>
      </View>

      <View style={[styleSheet.boxes, styleSheet.boxCount]}>
        <Text style={styleSheet.text}>
          {count}
        </Text>
      </View>


      <View style={[styleSheet.boxes, styleSheet.boxButton]}>
        <TouchableHighlight
        style={{borderRadius:40}}
          activeOpacity={0.1}
          underlayColor={colors.pallet.purple003}
          onPress={() =>{
            setColorContainer(colors.pallet.green001)
            setColorButton(colors.pallet.purple004)
            setCount(count + 1)}
          }>
          <AntDesign name="plus" size={18} color="#fff" />
        </TouchableHighlight>
      </View>
    </View>
  );
};
export default ButtonCount;


