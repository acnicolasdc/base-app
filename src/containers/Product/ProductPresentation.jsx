import React from 'react'
import { View } from "react-native";
import { Text } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import FieldInput from "@components/Field/FieldInput";
import style from "./ProductPresentation.style";

import { Fontisto } from '@expo/vector-icons';
const ProductPresentation = () => {
    const styleSheet = style();
    return (
        <LayoutFrame style={styleSheet.container}>
            <View style={styleSheet.containerImg} >
                <Fontisto name="qrcode" size={50} color="black" />
            </View>
            <View >
                <Text>NOMBRE DEL PRODUCTO</Text>
                <Text>DESCRIPCION</Text>
            
            </View>
        </LayoutFrame>
    )
}

export default ProductPresentation
