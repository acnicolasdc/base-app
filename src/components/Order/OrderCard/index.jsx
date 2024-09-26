import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import styles from "./OrderCard.style";
import IconWrap from "../../Icons/IconWrap";



export const defaultProps = Object.freeze({
    INFO: {
        nameClient: "Client name",
        idClient: 111,
        phone: 111,
        email: 'correo@mail.com',
        number: 777,
        items: [],
        total: 999,
        state:false
    },
    ON_PRESS: () => alert("press!"),
});
const OrderCard = ({
    style,
    onPress = defaultProps.ON_PRESS,
    info = defaultProps.INFO,
}) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    const { nameClient, state, phone, email, number, items, total } = info
    return (
        <TouchableOpacity
            onPress={onPress}
           
        >
            <View style={[styleSheet.container, style]}>
                <View style={styleSheet.iconContent}>
                    <IconWrap>
                        <MaterialCommunityIcons name="clipboard-text-outline" size={40} color="black" />
                    </IconWrap>
                </View>
                <View style={styleSheet.informationContent}>
                    <Text style={styleSheet.textNumOrder}># {number}</Text>
                    <Text style={styleSheet.textNameClient}>{nameClient}</Text>
                    <View
                        style={styleSheet.contentIndicator}>
                        {
                            state === 1 ?
                                (
                                    <AntDesign name="checkcircle" size={13} color="#2FD573" />
                                )

                                :
                                (
                                    <AntDesign name="clockcircle" size={13} color='#F9AA0D' />
                                )
                        }

                    </View>
                    <Text style={styleSheet.textItems}>{items.length} Productos</Text>
                    <Text style={styleSheet.textTotal}>TOTAL : {total}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default OrderCard;