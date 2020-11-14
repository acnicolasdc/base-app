import React from "react";
import { View, Image } from "react-native";
import { useTheme, Subheading, Headline} from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import ButtonCommon from "@components/Buttons/ButtonCommon";
import LayoutFrame from "@components/Layouts/LayoutFrame";
import image from "@assets/notice-background.png";
import style from "./NoticeInformation.styles";

const NoticeInformation = () => {
  const { colors } = useTheme();
  const styleSheet = style(colors);

  return (
    <LayoutFrame style={styleSheet.customFrame}>
      <View style={styleSheet.subheading}>
        <Subheading style={styleSheet.headingText}>ENVASE</Subheading>
        <View style={styleSheet.bottomAbsoluteContent}>
          <Ionicons name="ios-close" size={40} color={colors.pallet.white001} />
        </View>
      </View>
      <View style={styleSheet.container}>
        <View style={styleSheet.containerImage}>
            <Image style={styleSheet.image} source={image} />
        </View>
        <View style={styleSheet.containerText}>
          <Headline style={styleSheet.containerTextTile}>{`Opps.. Seems like you are not affiliated with any organization`}</Headline>
        </View>
      </View>
      <View style={styleSheet.bottomContent}>
      <ButtonCommon
        style={styleSheet.bottomContentButton}
      >SIGN UP AS COMPANY</ButtonCommon>
      </View>
    </LayoutFrame>
  );
};

export default NoticeInformation;
