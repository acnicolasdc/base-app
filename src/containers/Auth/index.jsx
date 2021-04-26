import React, { useState, useContext } from "react";
import { routes } from "@routes/public";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import ButtonSwitch from "@components/Button/ButtonSwitch";
import { AuthorizationsContext } from "@providers/Authorizations";
import style from "./Auth.style";

// hardcode users
const USER_ONE = {
  username: "sandra@orderway.com",
  password: "123",
};

const USER_TWO = {
  username: "victor@orderway.com",
  password: "123",
};

const USER_THREE = {
  username: "roger@orderway.com",
  password: "123",
};

const Auth = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveUserData } = useContext(AuthorizationsContext);
  const styleSheet = style();

  const handlerUserSession = () => {
    if (email === USER_ONE.username && password === USER_ONE.password) {
      saveUserData(USER_ONE);
    } else if (email === USER_TWO.username && password === USER_TWO.password) {
      saveUserData(USER_TWO);
    } else if (
      email === USER_THREE.username &&
      password === USER_THREE.password
    ) {
      saveUserData(USER_THREE);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FieldInput
        label="CORREO"
        textContentType="emailAddress"
        style={{ marginBottom: 10 }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <FieldInput
        label="CONTRASEÑA"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={styleSheet.buttonsContainer}>
        <View style={styleSheet.rememberContainer}>
          <Paragraph style={styleSheet.boldText}>Recordar mis datos</Paragraph>
          <ButtonSwitch
            onPress={() => setState((prevState) => !prevState)}
            isToggle={state}
          />
        </View>
        <ButtonCommon
          style={{
            width: "100%",
          }}
          onPress={handlerUserSession}
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
          onPress={() => navigation.navigate(routes.SING_UP)}
        >
          NO TENGO UNA CUENTA
        </ButtonCommon>
      </View>
    </View>
  );
};

export default Auth;
