import React from 'react';
import { View } from 'react-native';
import { useTheme } from "react-native-paper";
import styles from './OderCard.style';

const OrderCard = ({ style }) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    return (
        <View style={[styleSheet.container, style]}>
           
        </View>
    );
}


export default OrderCard;