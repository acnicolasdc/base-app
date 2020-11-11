import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../routes/public";
import FieldInputPhone from "../../components/Fields/FieldInputPhone";
import ButtonCommon from "../../components/Buttons/ButtonCommon";
import style from "./ForgotPassword.style";

const ForgotPassword = () => {
  const styleSheet = style();
  const navigation = useNavigation();
  return (
    <View style={styleSheet.formContainer}>
      <FieldInputPhone label="PHONE NUMBER" style={{width:'100%'}}/>
      <ButtonCommon
          style={{
            width: "100%",
          }}
          onPress={()=>navigation.navigate(routes.CODE_VERIFICATION)}
        >
          SEND OTP
        </ButtonCommon>
    </View>
  );
};

export default ForgotPassword;
