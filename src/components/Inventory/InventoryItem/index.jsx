import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
});

const InventoryItem = ({ style, info = defaultProps.INFO }) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    const { name, amount, price, date } = info
    return (
        <TouchableOpacity onPress={() => alert('Pressed!')}>

            <View style={[styleSheet.container, style]}>
                <View style={styleSheet.iconContent}>
                    <IconWrap>
                        <MaterialCommunityIcons name="qrcode-scan" size={15} color="black" />
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