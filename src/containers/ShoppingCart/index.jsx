import React, { useContext, useState, useEffect } from 'react'
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
    const { products, updateCostumerInformation, costumerInformation } = useContext(ShoppingCartContext);
    const [ready, setReady] = useState(false);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const styleSheet = style();
    useEffect(() => {
        isFormComplete()
    }, [name, id, phone, email, products])
    const isFormComplete = () => {
        let isReady = false;
        if (name === "") isReady = true
        if (id === "") isReady = true
        if (phone === "") isReady = true
        if (email === "") isReady = true
        if (Object.values(products).length === 0) isReady = true
        setReady(isReady)
    }
    const handlerShoppingCartToOrder = () => {
        updateCostumerInformation({
            name: name,
            id: costumer.id,
            phone: costumer.phone,
            email: costumer.email
        })
    }
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



                <FieldInput label="NOMBRE DE CLIENTE" style={styleSheet.fieldInput} onChangeText={text => setName(text)} value={name} />
                <FieldInput label="NUMERO DE IDENTIFICACION" style={styleSheet.fieldInput} keyboardType="number-pad" onChangeText={text => setId(text)} value={id} />
                <FieldInput label="CELULAR" style={styleSheet.fieldInput} keyboardType="number-pad" onChangeText={text => setPhone(text)} value={phone} />
                <FieldInput label="CORREO ELECTRONICO" style={styleSheet.fieldInput} onChangeText={text => setEmail(text)} value={email}/>
                <Text style={styleSheet.txtSeparatorProducts}>PRODUCTOS</Text>

                <View style={styleSheet.contentProducts}>
                    {Object.values(products).length === 0 ? <Text style={styleSheet.txtTotal}>Carrito vacio</Text> : <FlatList
                        data={Object.values(products)}

                        renderItem={({ item, index }) => (<InventoryItem info={{ ...item.info, amount: item.count }} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />}

                </View>

                <View style={styleSheet.contentTotal}>
                    <Text style={styleSheet.txtTotal}>TOTAL</Text>
                    <Text style={styleSheet.txtTotal}>$50000</Text>

                </View>



                <View style={styleSheet.btnGenerateOrder}>
                    <ButtonCommon disabled={ready} onPress={handlerShoppingCartToOrder}>Generar Orden</ButtonCommon>
                </View>
            </ScrollView>
        </View>

    )
}

export default ShoppingCart
