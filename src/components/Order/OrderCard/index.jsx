import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from "./OrderCard.style";
import IconWrap from "../../Icons/IconWrap/IconWrap";

const OrderCard = ({ style, info = { info } }) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    return (
        <View style={[styleSheet.container, style]}>

            <View style={styleSheet.iconContent}>
                <IconWrap>
                    <MaterialCommunityIcons name="clipboard-text-outline" size={40} color="black" />
                </IconWrap>
            </View>
            <View style={styleSheet.informationContent}>
                <Text style={styleSheet.textNumOrder}># {info.NumeroOrden}</Text>
                <Text style={styleSheet.textNameClient}>{info.NombreCliente}</Text>
                <View
                    style={styleSheet.contentIndicator}
                >
                    <AntDesign name="checkcircle" size={13} color="#2FD573" />
                </View>
                <Text style={styleSheet.textItems}>{info.items.length} Productos</Text>
                <Text style={styleSheet.textTotal}>TOTAL : {info.Total}</Text>
            </View>
        </View>
    );
};
export default OrderCard;