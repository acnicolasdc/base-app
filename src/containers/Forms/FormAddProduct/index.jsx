import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import IconWrap from "@components/Icons/IconWrap";
import style from "./FormAddProduct.style";

const FormAddProduct = () => {
    const styleSheet = style();

    return (
     
        <View style={styleSheet.container}>
            <Text style={styleSheet.textTile}
            >{"AGREGAR NUEVO \n      PRODUCTO"}
            </Text>

            <View>
                <IconWrap>
                    <Fontisto name="qrcode" size={50} color="black" />
                </IconWrap>
                <Text
                    style={styleSheet.textSubtile}
                >QR GENERADO 
                </Text>

            </View>

            <View style={styleSheet.contentInformation}>
                <FieldInput label="NOMBRE DEL PRODUCTO" style={{ marginBottom: 5 }} />
                <FieldInput
                    label="PRECIO DE VENTA"
                    keyboardType="numeric"
                    style={{ marginBottom: 5 }}
                />
                <FieldInput
                    label="CANTIDAD"
                    keyboardType="numeric"
                    style={{ marginBottom: 5 }}
                />
                <FieldInput
                    label="DESCRIPCION"
                    style={{ marginBottom: 5 }}

                />
            </View>

            <View style={styleSheet.btnContainer}>
                <ButtonCommon>ACEPTAR</ButtonCommon>
            </View>
        </View>
    );
};

export default FormAddProduct;







