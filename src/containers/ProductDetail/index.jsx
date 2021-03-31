import React from 'react'
import { View } from "react-native";
import { Text } from "react-native-paper";
import IconWrap from "@components/Icons/IconWrap";
import style from "./ProductDetail.style";
import ButtonCommon from "@components/Button/ButtonCommon"

import { Fontisto } from '@expo/vector-icons';
const ProductDetail = () => {
    const styleSheet = style();
    return (
        <View style={styleSheet.container}>
            <View style={styleSheet.contentImg}>
                <IconWrap>
                    <Fontisto name="qrcode" size={180} color="black" />
                </IconWrap>
            </View>
            <View style={styleSheet.contentNameProduct} >
                <Text style={styleSheet.textNameProduct} >NOMBRE DEL PRODUCTO</Text>
                <Text style={styleSheet.textAmountStock}>100</Text>
            </View>
            <View style={styleSheet.contentSeparator} >
                <View style={styleSheet.contentAmount}>
                    <Text style={styleSheet.textAmount}>CANTIDAD</Text>
                </View>
                <View style={styleSheet.contentPrice}>
                    <Text style={styleSheet.textPrice}>PRECIO</Text>
                </View>
            </View>
            <View style={styleSheet.contentDescription}>
                <Text style={styleSheet.titleDescription}>DESCRIPCION</Text>
                <Text style={styleSheet.textDescription}>informacionas akdlk asdlkasdk;a nsklandk;a sdk;sn;dans;ldmal'sdlsa</Text>
            </View>
            <View>
                <ButtonCommon> Agregar al carro</ButtonCommon>
            </View>
        </View>

    )
}

export default ProductDetail
