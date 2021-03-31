import React, { useState } from 'react'
import style from "./OrderDetail.style";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import FieldInput from "@components/Field/FieldInput";
import ButtonSwitch from "@components/Button/ButtonSwitch";
import ButtonCommon from "@components/Button/ButtonCommon";
import IconWrap from '@components/Icons/IconWrap';

const OrderDetail = () => {
    const styleSheet = style();
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
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

                <Text style={styleSheet.textSubtitleForm} >ORDEN</Text>



                <FieldInput editable="false" label="NOMBRE DE CLIENTE" style={styleSheet.text} />
                <FieldInput editable="false" label="NUMERO DE IDENTIFICACION" style={styleSheet.text} keyboardType="number-pad" />
                <FieldInput editable="false" label="CELULAR" style={styleSheet.text} keyboardType="number-pad" />
                <FieldInput editable="false" label="CORREO ELECTRONICO" style={styleSheet.text} />
                <FieldInput editable="false" label="PRODUCTOS" style={styleSheet.text} />
                <View style={styleSheet.contentTotal}>
                    <Text style={styleSheet.txtTotal}>TOTAL</Text>
                    <Text style={styleSheet.txtTotal}>$50000</Text>

                </View>


                <View style={styleSheet.toggleEmail}>
                    <Text style={styleSheet.textsToggles}> Enviar por Correo Electronico</Text>
                    <ButtonSwitch
                        onPress={() => setState((prevState) => !prevState)}
                        isToggle={state}>
                    </ButtonSwitch>

                </View>

                <View style={styleSheet.toggleWhatsapp}>
                    <Text style={styleSheet.textsToggles}> Enviar por Whatsapp </Text>
                    <ButtonSwitch
                        onPress={() => setState2((prevState2) => !prevState2)}
                        isToggle={state2}>
                    </ButtonSwitch>
                </View>

                <View style={styleSheet.btnApproveOrder}>

                    <ButtonCommon>APROBAR</ButtonCommon>
                </View>
            </ScrollView>
        </View>

    )
}

export default OrderDetail
