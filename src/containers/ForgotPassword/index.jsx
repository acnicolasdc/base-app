import React from "react";
import { View } from "react-native";
import FieldInputPhone from "../../components/Fields/FieldInputPhone";
import ButtonCommon from "../../components/Buttons/ButtonCommon";
import style from "./ForgotPassword.style";

const ForgotPassword = () => {
  const styleSheet = style();
  return (
    <View style={styleSheet.formContainer}>
      <FieldInputPhone label="PHONE NUMBER" style={{width:'100%'}}/>
      <ButtonCommon
          style={{
            width: "100%",
          }}
        >
          SEND OTP
        </ButtonCommon>
    </View>
  );
};

export default ForgotPassword;
