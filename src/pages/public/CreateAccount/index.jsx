import React from "react";
import { View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { routes } from "@routes/public";
import useHeader, {defaultParams} from "@hooks/useHeader";
import LayoutFrame from "@components/Layout/LayoutFrame";
import SignUp from "@containers/SignUp";
import style from "./CreateAccount.styles";

const CreateAccount = () => {
  useHeader({ ...defaultParams, rightText: 'Tiene una cuenta? Login', rightNavigation:routes.LOGIN });
  const styleSheet = style();
  return (
    <LayoutFrame>
      <View style={styleSheet.headerContainer}>
        <Headline style={styleSheet.headerContainerTile}>{`No tiene una cuenta?\nRegistrate!`}</Headline>
        <Subheading>Por favor ingresa tus datos</Subheading>
      </View>
      <View style={styleSheet.container}>
      <SignUp />
      </View>
    </LayoutFrame>
  );
};

export default CreateAccount;
