import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { Headline, useTheme, Paragraph, Subheading } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ButtonCommon from "@components/Buttons/ButtonCommon";
import FieldCodeVerification from "@components/Fields/FieldCodeVerification";
import style from "./OTPVerification.style";

export const defaultProps = Object.freeze({
  PHONE_NUMBER: "(+91) 87855 XXXX",
  PUSH_ROUTE: null,
});

const OTPVerification = ({ phoneNumber, pushRoute }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [code, setCode] = useState("");
  const windowWidth = Math.floor(Dimensions.get("window").width * 0.75);
  const styleSheet = style(colors, windowWidth);
  return (
    <View style={styleSheet.formContainer}>
      <View style={[styleSheet.formContainer, styleSheet.centerContent]}>
        <View style={styleSheet.verificationContainer}>
          <Headline>OTP Verification</Headline>
          <Paragraph>{`Enter the OTP received to phone\n${phoneNumber}`}</Paragraph>
          <FieldCodeVerification
            code={code}
            setCode={setCode}
            cellSize={Math.floor(windowWidth / 6)}
            rootStyle={styleSheet.rootCodeComponent}
          />
          <View style={styleSheet.timeIndicatorContainer}>
            <Ionicons
              name="ios-refresh"
              size={20}
              style={styleSheet.timeIconIndicator}
            />
            <Subheading style={styleSheet.timeTextIndicator}>
              Resend code in 00:23
            </Subheading>
          </View>
        </View>
      </View>
      <View style={styleSheet.centerContent}>
        <ButtonCommon
          style={{
            width: "70%",
          }}
          onPress={() => (pushRoute ? navigation.navigate(pushRoute) : null)}
        >
          VERIFY & PROCEED
        </ButtonCommon>
      </View>
    </View>
  );
};

export default OTPVerification;
