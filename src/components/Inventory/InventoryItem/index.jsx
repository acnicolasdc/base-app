import React from "react";
import { View, Image } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styles from "./InventoryItem.style";
import IconWrap from "../../Icons/IconWrap";


export const defaultProps = Object.freeze({
    INFO: {
        date: "7/17/2020",
        name: "Product name",
        amount: 1,
        price: 1000,
       
    },
    ON_PRESS: () => null,
});

const InventoryItem = ({
    style, 
    info = defaultProps.INFO,
    onPress = defaultProps.ON_PRESS,
}) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    const { name, amount, price, date, image } = info
    return (
        <TouchableOpacity onPress={onPress}>

            <View style={[styleSheet.container, style]}>
                <View style={styleSheet.iconContent}>
                    <IconWrap>
                        <Image source={{ uri: image, cache: 'only-if-cached' }} style={{ resizeMode: 'contain', width: 35, height: 35 }} />
                    </IconWrap>
                </View>
                <View style={styleSheet.informationContent}>
                    <Text style={styleSheet.textNameItem}>{name}</Text>

                    <Text style={styleSheet.textAmount}>{amount}</Text>
                </View>
                <View style={styleSheet.wrapTextPrice}>
                    <Text style={styleSheet.textPrice}>$ {price}</Text>
                    <Text style={styleSheet.textDate}>{date}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );
};
export default InventoryItem;