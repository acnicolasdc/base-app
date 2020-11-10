import React from "react";
import { View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { routes } from "../../routes/public";
import useHeader, {defaultParams} from "../../hooks/useHeader";
import LayoutFrame from "../../components/Layouts/LayoutFrame";
import ForgotPasswordContainer from "../../containers/ForgotPassword";
import style from "./ForgotPassword.styles";

const ForgotPassword = () => {
  useHeader({ ...defaultParams, rightText: 'Remember Password? Login', rightNavigation:routes.LOGIN });
  const styleSheet = style();
  return (
    <LayoutFrame>
      <View style={styleSheet.headerContainer}>
        <Headline style={styleSheet.headerContainerTile}>Forgot Password?</Headline>
        <Subheading>Please enter the phone number associated with this account</Subheading>
      </View>
      <View style={styleSheet.container}>
      <ForgotPasswordContainer />
      </View>
    </LayoutFrame>
  );
};

export default ForgotPassword;
