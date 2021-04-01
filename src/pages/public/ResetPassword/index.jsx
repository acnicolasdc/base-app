import React from "react";
import { View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { routes } from "@routes/public";
import useHeader, { defaultParams } from "@hooks/useHeader";
import LayoutFrame from "@components/Layout/LayoutFrame";
import ResetPasswordContainer from "@containers/ResetPassword";
import style from "./ResetPassword.styles";

const ResetPassword = () => {
  useHeader({
    ...defaultParams,
    rightText: "Remember Password? Login",
    rightNavigation: routes.LOGIN,
  });
  const styleSheet = style();
  return (
    <LayoutFrame>
      <View style={styleSheet.headerContainer}>
        <Headline style={styleSheet.headerContainerTile}>
          Crear nueva contraseña
        </Headline>
        <Subheading>{`Define y confirma una contraseña nueva`}</Subheading>
      </View>
      <View style={styleSheet.container}>
        <ResetPasswordContainer />
      </View>
    </LayoutFrame>
  );
};

export default ResetPassword;
