import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";
import OTPVerification from '@containers/OTPVerification'
import style from "./CodeVerification.styles";

const CodeVerification = ({ route }) => {
  const styleSheet = style();
  const { colors, dark } = useTheme();
  const { phoneNumber, pushRoute } = route.params;
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.background, dark?colors.pallet.grey003:colors.pallet.purple001]}
    >
      <LayoutFrame style={styleSheet.container}>
        <OTPVerification phoneNumber={phoneNumber} pushRoute={pushRoute}/>
      </LayoutFrame>
    </LinearGradient>
  );
};

export default CodeVerification;
