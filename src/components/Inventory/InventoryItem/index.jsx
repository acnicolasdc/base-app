import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./InventoryItem.style";
import IconWrap from "../../Icons/IconWrap/IconWrap";

const InventoryItem = ({ style, info = { info } }) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    return (
        <View style={[styleSheet.container, style]}>
            <View style={styleSheet.iconContent}>
                <IconWrap>
                    <MaterialCommunityIcons name="qrcode-scan" size={15} color="black" />
                </IconWrap>
            </View>
            <View style={styleSheet.informationContent}>
                <Text style={styleSheet.textNameItem}>{info.NombreProducto}</Text>
                <Text style={styleSheet.textDate}>{info.fechaEntrada}</Text>
                <Text style={styleSheet.textAmount}>{info.Cantidad}</Text>
            </View>
            <View style={styleSheet.wrapTextPrice}>
                <Text style={styleSheet.textPrice}>$ {info.Precio}</Text>
            </View>

        </View>
    );
};
export default InventoryItem;