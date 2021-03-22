import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@routes/public";
import FieldInputPhone from "@components/Field/FieldInputPhone";
import ButtonCommon from "@components/Button/ButtonCommon";
import style from "./ForgotPassword.style";

const ForgotPassword = () => {
  const styleSheet = style();
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={styleSheet.formContainer}>
      <FieldInputPhone
        label="PHONE NUMBER"
        style={{ width: "100%" }}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <ButtonCommon
        style={{
          width: "100%",
         
        }}
        onPress={() =>
          navigation.navigate(routes.CODE_VERIFICATION, {
            phoneNumber: phoneNumber,
            pushRoute: routes.RESET_PASSWORD,
          })
        }
      >
        SEND OTP
      </ButtonCommon>
    </View>
  );
};

export default ForgotPassword;
