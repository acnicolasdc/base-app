import React from 'react'
import style from "./ShoppingCart.style";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import LayoutFrame from "@components/Layout/LayoutFrame";
const ShoppingCart = () => {
    const styleSheet = style();
    return (

        <View style={styleSheet.container}>
            <View style={styleSheet.containerImg} >
                <MaterialIcons name="shopping-cart" size={70} color="black" />
                <Text style={styleSheet.textTitleForm}>CARRO DE COMPRAS</Text>
            </View>
            <Text style={styleSheet.textSubtitleForm} >Ingresar los datos del cliente</Text>

            <ScrollView style={styleSheet.infomationContent} >

                <FieldInput label="NOMBRE DE CLIENTE" style={styleSheet.fieldInput} />
                <FieldInput label="NUMERO DE IDENTIFICACION" style={styleSheet.fieldInput} keyboardType="number-pad" />
                <FieldInput label="CELULAR" style={styleSheet.fieldInput} keyboardType="number-pad" />
                <FieldInput label="NOMBRE DE CLIENTE" style={styleSheet.fieldInput} />
                <FieldInput label="CORREO ELECTRONICO" style={styleSheet.fieldInput} />
                <FieldInput label="NUMERO ORDEN" style={styleSheet.fieldInput} />
                <View style={styleSheet.contentProducts}>
                    <FieldInput label="PRODUCTOS" style={styleSheet.fieldInputProducts} />
                    <ButtonCommon style={{ width: 15 }}><Text style={styleSheet.buttonsText}>+</Text></ButtonCommon>
                </View>

                <FieldInput label="TOTAL" style={styleSheet.fieldInput} />
                <View style={styleSheet.buttonsWrapContent}>


                    <ButtonCommon style={styleSheet.buttons}><Text style={styleSheet.buttonsText}>Generar</Text></ButtonCommon>
                </View>
            </ScrollView>
        </View>

    )
}

export default ShoppingCart
