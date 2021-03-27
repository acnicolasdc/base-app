import React from "react";
import { View } from "react-native";
import { Paragraph, useTheme } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./InventoryItem.style";

const InventoryItem = ({ style, info={info}}) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    return (
        <View style={[styleSheet.container, style]}>
            <View style={styleSheet.iconContent}>
                <FontAwesome5 name="store" size={35} color="black" />
            </View>
            <View style={styleSheet.informationContent}>
                <Paragraph style={styleSheet.textTitle}>Producto: {info.NombreProducto}</Paragraph>
                <Paragraph style={styleSheet.textTitle}>Precio :  {info.Precio}</Paragraph>
                <Paragraph style={styleSheet.textTitle}>Descripcion : {info.Descripcion}</Paragraph>
            </View>
        </View>
    );
};
export default InventoryItem;