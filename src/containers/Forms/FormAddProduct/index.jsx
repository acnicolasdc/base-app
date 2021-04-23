import React, { useContext, useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { routes, subRoutes } from "@routes/private";
import { useNavigation } from "@react-navigation/native";
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import styles from "./FormAddProduct.style";
import { useTheme } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';
import { ProductsStorageContext } from "@providers/ProductsStorage";


const FormAddProduct = () => {
    const { pallet, colors } = useTheme();
    const styleSheet = styles(pallet, colors);
    const navigation = useNavigation();


    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productAmount, setProductAmount] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const {
        addProducts
    } = useContext(ProductsStorageContext);

    const handlerAddNewProduct = () => {
        const newProduct = {
            id: productId,
            name: productName,
            amount: productAmount,
            price: productPrice,
            qr: "",
            image: "",
            description: productDescription,
            color: "",
            date: "1/12/2021",
        };
        addProducts(newProduct);
        navigation.navigate(routes.GENERAL_TAB, {
            screen: subRoutes.GENERAL_TAB.INVENTORY,
        })
    };
    return (
        <KeyboardAwareScrollView>
            <View style={styleSheet.container}>

                <Text style={styleSheet.textTile}
                >{"INGRESAR PRODUCTO"}
                </Text>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <FieldInput label="ID"
                        keyboardType="numeric"
                        style={{
                            marginBottom: 5,
                            width: 110, marginHorizontal: 2
                        }}
                        onChangeText={(text) => setProductId(text)}
                        value={productId}
                    />
                    <FieldInput
                        label="CANTIDAD"
                        keyboardType="numeric"
                        style={{ marginBottom: 5, width: 120, marginHorizontal: 2 }}
                        onChangeText={(text) => setProductAmount(text)}
                        value={productAmount}
                    />
                    <Pressable onPress={() =>
                        navigation.navigate(routes.GENERAL_STACK, {
                            screen: subRoutes.GENERAL_STACK.SCAN_BARCODE,
                        })}
                    >
                        <View style={styleSheet.boxIcon}>
                            <Fontisto name="camera" size={22} color="white" />
                        </View>
                    </Pressable>

                </View>
                <FieldInput label="NOMBRE DEL PRODUCTO"
                    style={styleSheet.fieldInput}
                    onChangeText={(text) => setProductName(text)}
                    value={productName}
                />
                <FieldInput
                    label="PRECIO DE VENTA"
                    keyboardType="numeric"
                    style={styleSheet.fieldInput}
                    onChangeText={(text) => setProductPrice(text)}
                    value={productPrice}
                />
                <FieldInput
                    label="DESCRIPCION"
                    style={styleSheet.fieldInput}
                    onChangeText={(text) => setProductDescription(text)}
                    value={productDescription}
                />
                <View style={styleSheet.boxScan}>
                    <Text style={styleSheet.txtScan}>
                        Escanear codigo de barras
                    </Text>
                    <Pressable
                        onPress={() =>
                            navigation.navigate(routes.GENERAL_STACK, {
                                screen: subRoutes.GENERAL_STACK.SCAN_BARCODE,
                            })}
                    >
                        <View style={styleSheet.boxIcon}>
                            <MaterialCommunityIcons name="barcode-scan" size={28} color="white" />
                        </View>
                    </Pressable>
                </View>
                <View style={styleSheet.btnContainer}>
                    <ButtonCommon
                        onPress={handlerAddNewProduct}
                    >ACEPTAR</ButtonCommon>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default FormAddProduct;







