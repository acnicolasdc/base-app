import React from "react";
import { View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { routes } from "@routes/public";
import useHeader, { defaultParams } from "@hooks/useHeader";
import LayoutFrame from "@components/Layout/LayoutFrame";
import Auth from "@containers/Auth";
import style from "./Login.styles";

const Login = () => {
  useHeader({
    ...defaultParams,
    rightText: "Olvido la contraseña?",
    rightNavigation: routes.FORGOT_PASSWORD,
  });
  const styleSheet = style();
  return (
    <LayoutFrame>
      <View style={styleSheet.headerContainer}>
        <Headline style={styleSheet.headerContainerTile}>Bienvenido!</Headline>
        <Subheading>Ingresa tus datos para continuar</Subheading>
      </View>
      <View style={styleSheet.container}>
        <Auth/>
      </View>
    </LayoutFrame>
  );
};

export default Login;
