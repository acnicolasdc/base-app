import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@routes/public";
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import style from "./ResetPassword.style";

const ResetPassword = () => {
  const styleSheet = style();
  const navigation = useNavigation();
  return (
    <View style={styleSheet.formContainer}>
    <View style={styleSheet.formContainerInput}>
      <FieldInput label="NUEVA CONTRASEÑA" secureTextEntry={true} style={{ marginBottom: 10 }}/>
      <FieldInput label="CONFIRMAR NUEVA CONTRASEÑA" secureTextEntry={true}/>
    </View>
      <ButtonCommon
        style={{
          width: "100%",
      
        }}
        onPress={() =>
          navigation.navigate(routes.LOGIN)
        }
      >
        RESET PASSWORD
      </ButtonCommon>
    </View>
  );
};

export default ResetPassword;
