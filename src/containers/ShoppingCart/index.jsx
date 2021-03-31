import React from 'react'
import style from "./ShoppingCart.style";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import IconWrap from '@components/Icons/IconWrap';

const ShoppingCart = () => {
    const styleSheet = style();
    return (

        <View style={styleSheet.container}>
         <ScrollView style={styleSheet.infomationContent} >
            <View style={styleSheet.contentImg}>
                <IconWrap >
                    <MaterialIcons name="shopping-cart" size={50} color="black" />
                </IconWrap>
                <View >
                    <Text style={styleSheet.textNumOrder}>#187</Text>
                </View>

            </View>

            <Text style={styleSheet.textSubtitleForm} >INGRESAR DATOS</Text>

           

                <FieldInput label="NOMBRE DE CLIENTE" style={styleSheet.fieldInput} />
                <FieldInput label="NUMERO DE IDENTIFICACION" style={styleSheet.fieldInput} keyboardType="number-pad" />
                <FieldInput label="CELULAR" style={styleSheet.fieldInput} keyboardType="number-pad" />
                <FieldInput label="CORREO ELECTRONICO" style={styleSheet.fieldInput} />
                <View style={styleSheet.contentTotal}> 
                <Text style={styleSheet.txtTotal}>TOTAL</Text>
                <Text style={styleSheet.txtTotal}>$50000</Text>

                </View>

                

                <View style={styleSheet.contentProducts}>
                    <FieldInput label="PRODUCTOS" style={styleSheet.fieldInputProducts} />
                    <ButtonCommon><Text style={styleSheet.textButton}>+</Text></ButtonCommon>
                </View>
                
                <View style={styleSheet.btnGenerateOrder}>
                    <ButtonCommon>Generar</ButtonCommon>
                </View>
            </ScrollView>
        </View>

    )
}

export default ShoppingCart
