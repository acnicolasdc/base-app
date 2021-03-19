import React, { useState } from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@routes/public";
import FieldInput from "@components/Field/FieldInput";
import FieldInputPhone from "@components/Field/FieldInputPhone";
import ButtonCommon from "@components/Button/ButtonCommon";
import image from "@assets/notice-background.png";
import style from "./SignUp.style";

const SignUp = () => {
  const styleSheet = style();
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <FieldInput label="NIT" style={{ marginBottom: 10 }} />
      <FieldInput label="NOMBRE DE LA EMPRESA" style={{ marginBottom: 10 }} />
      <FieldInput
        label="CORREO ELECTRONICO"
        textContentType="emailAddress"
        style={{ marginBottom: 10 }}
      />
      <FieldInputPhone
        label="CELULAR / TELEFONO"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View style={styleSheet.buttonsContainerDivider}>
        <Paragraph style={styleSheet.boldText}>
          - CREAR MI CONTRASEÑA -
        </Paragraph>
      </View>
      <FieldInput
        label="CONTRASEÑA"
        secureTextEntry={true}
        style={{ marginBottom: 10 }}
      />
      <FieldInput label="CONFIRMAR CONTRASEÑA" secureTextEntry={true} />
      <View style={styleSheet.bottomContainer}>
        <ButtonCommon
          style={{
            width: "100%",
          }}
          onPress={() =>
            navigation.navigate(routes.NOTICE_INFORMATION, {
              message: 'Wow!! Bienvenido a Payboard, recuerda ingresar con tu correo y contraseña',
              buttonMessage: 'INICIAR SESION',
              banner: image,
              pushRoute: routes.LOGIN,
            })
          }
        >
          CREAR CUENTA
        </ButtonCommon>
      </View>
    </View>
  );
};

export default SignUp;
