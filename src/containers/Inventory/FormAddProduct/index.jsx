import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@routes/public";
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import { Fontisto } from '@expo/vector-icons'; 
import style from "./FormAddProduct.style";

const FormAddProduct = () => {
  const styleSheet = style();
  const navigation = useNavigation();
 
  return (
    <View style={{ flex: 1 }}>
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
        style={{ marginBottom: 5, height:90 }}
      />
  <Fontisto name="qrcode" size={50} color="black" />
   
   
      <View style={styleSheet.bottomContainer}>
        <ButtonCommon
          onPress={() =>
            navigation.navigate(routes.INVENTORY)
          }
        >
          FINALIZAR
        </ButtonCommon>
      </View>
    </View>
  );
};

export default FormAddProduct;
