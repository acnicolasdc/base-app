import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme, Subheading, Headline } from "react-native-paper";
import ButtonCommon from "@components/Button/ButtonCommon";
import LayoutFrame from "@components/Layout/LayoutFrame";
import style from "./NoticeInformation.styles";

const NoticeInformation = ({ route }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styleSheet = style(colors);
  const { message, buttonMessage, pushRoute, banner } = route.params;
  return (
    <LayoutFrame style={styleSheet.customFrame}>
      <View style={styleSheet.subheading}>
        <Subheading style={styleSheet.headingText}>ORDERWAY</Subheading>
      </View>
      <View style={styleSheet.container}>
        <View style={styleSheet.containerImage}>
          <Image style={styleSheet.image} source={banner} />
        </View>
        <View style={styleSheet.containerText}>
          <Headline style={styleSheet.containerTextTile}>{message}</Headline>
        </View>
      </View>
      <View style={styleSheet.bottomContent}>
        <ButtonCommon
          style={styleSheet.bottomContentButton}
          onPress={() => navigation.navigate(pushRoute)}
        >
          {buttonMessage}
        </ButtonCommon>
      </View>
    </LayoutFrame>
  );
};

export default NoticeInformation;
