import React, { useContext } from 'react'
import style from "./ShoppingCart.style";
import { View, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import IconWrap from '@components/Icons/IconWrap';
import InventoryItem from "@components/Inventory/InventoryItem";
import { ShoppingCartContext } from "@providers/ShoppingCart";

const ShoppingCart = () => {
    const { products } = useContext(ShoppingCartContext);
    console.log(products)
    const styleSheet = style();

    return (

        <View style={styleSheet.container}>
            <ScrollView style={styleSheet.infomationContent} >
                <View style={styleSheet.contentImg}>
                    <IconWrap >
                        <MaterialIcons name="shopping-cart" size={90} color="black" />
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
                <Text style={styleSheet.txtSeparatorProducts}>PRODUCTOS</Text>

                <View style={styleSheet.contentProducts}>
                    <FlatList
                        data={Object.values(products)}
                        renderItem={({ item, index }) => (<InventoryItem info={item.item} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <ButtonCommon style={{ width: 50, alignSelf: "center" }}><Text style={styleSheet.textButton}>+</Text></ButtonCommon>
                </View>

                <View style={styleSheet.contentTotal}>
                    <Text style={styleSheet.txtTotal}>TOTAL</Text>
                    <Text style={styleSheet.txtTotal}>$50000</Text>

                </View>



                <View style={styleSheet.btnGenerateOrder}>
                    <ButtonCommon>Generar Orden</ButtonCommon>
                </View>
            </ScrollView>
        </View>

    )
}

export default ShoppingCart
