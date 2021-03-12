import React, { useState } from "react";
import { routes } from "@routes/public";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import FieldInput from "@components/Fields/FieldInput";
import ButtonCommon from "@components/Buttons/ButtonCommon";
import ButtonSwitch from "@components/Buttons/ButtonSwitch";
import style from "./Auth.style";

const Auth = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(false);
  const styleSheet = style();
  return (
    <View style={{flex:1}}>
      <FieldInput
        label="CORREO"
        textContentType="emailAddress"
        style={{ marginBottom: 10 }}
      />
      <FieldInput label="CONTRASEÑA" secureTextEntry={true} />
      <View style={styleSheet.buttonsContainer}>
        <View style={styleSheet.rememberContainer}>
          <Paragraph style={styleSheet.boldText}>
            Recordar mis datos
          </Paragraph>
          <ButtonSwitch
            onPress={() => setState((prevState) => !prevState)}
            isToggle={state}
          />
        </View>
        <ButtonCommon
          style={{
            width: "100%",
          }}
        >
          INICIAR SESION
        </ButtonCommon>
        <View style={styleSheet.buttonsContainerDivider}>
          <Paragraph style={styleSheet.boldText}>- O -</Paragraph>
        </View>
        <ButtonCommon
          mode="outlined"
          style={{
            width: "80%",
          }}
          onPress={() =>
          navigation.navigate(routes.SING_UP)
        }
        >
          NO TENGO UNA CUENTA
        </ButtonCommon>
      </View>
    </View>
  );
};

export default Auth;
