import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../routes/public";
import ButtonCommon from "../../components/Buttons/ButtonCommon";
import style from "./OTPVerification.style";

const OTPVerification = () => {
  const styleSheet = style();
  const navigation = useNavigation();
  return (
    <View style={styleSheet.formContainer}>
      <View style={[styleSheet.formContainer, styleSheet.centerContent]}></View>
      <View style={styleSheet.centerContent}>
        <ButtonCommon
          style={{
            width: "70%",
          }}
          onPress={() => navigation.navigate(routes.CODE_VERIFICATION)}
        >
          VERIFY & PROCEED
        </ButtonCommon>
      </View>
    </View>
  );
};

export default OTPVerification;
