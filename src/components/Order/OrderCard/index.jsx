import React from "react";
import { View } from "react-native";
import { Paragraph, useTheme } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./OderCard.style";

const OrderCard = ({ style }) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    return (
        <View style={[styleSheet.container, style]}>
            <View style={styleSheet.iconContent}>
                <FontAwesome5 name="store" size={50} color="black" />
            </View>
            <View style={styleSheet.informationContent}>
                <Paragraph>Perreo puro</Paragraph>
                <Paragraph>Perreo puro</Paragraph>
                <Paragraph>Perreo puro</Paragraph>
                <Paragraph>Perreo puro</Paragraph>
            </View>
        </View>
    );
};
export default OrderCard;