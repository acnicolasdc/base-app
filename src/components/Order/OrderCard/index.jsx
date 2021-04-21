import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import styles from "./OrderCard.style";
import IconWrap from "../../Icons/IconWrap";



export const defaultProps = Object.freeze({
    INFO: {
        number: 777,
        nameClient: "Client name",
        items: [],
        total: 999,
    },
});
const OrderCard = ({ style, info: { number, nameClient, items, total } = defaultProps.INFO }) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    return (
        <TouchableOpacity 
        onPress={() => alert('Pressed!')
        
        }>

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
                        style={styleSheet.contentIndicator}
                    >   
                        <AntDesign name="clockcircle" size={13} color='#F9AA0D' />
                  {/*   <AntDesign name="checkcircle" size={13} color="#2FD573" />
                    <AntDesign name="closecircle" size={13} color="black" /> */}
                        
                    </View>
                    <Text style={styleSheet.textItems}>{items.length} Productos</Text>
                    <Text style={styleSheet.textTotal}>TOTAL : {total}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default OrderCard;