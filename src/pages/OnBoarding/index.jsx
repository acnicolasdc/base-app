import React, { useState } from "react";
import style from "./OnBoarding.styles";
import { routes } from "../../routes/public";
import { View } from "react-native";
import { useTheme, Subheading, Headline, Paragraph } from "react-native-paper";
import ButtonStepIndicator from "../../components/Buttons/ButtonStepIndicator";
import LayoutFrame from "../../components/Layouts/LayoutFrame";
import getStartedInformation from './utils/getStartedInformation';

const OnBoarding = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const { colors } = useTheme();
  const styleSheet = style(colors);
  const maxSteps = getStartedInformation.length;
  const stepController = () => {
    if (step+1 === maxSteps) {
      navigation.navigate(routes.LOGIN);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const { title, text } = getStartedInformation[step];
  return (
    <LayoutFrame>
      <View style={styleSheet.subheading}>
        <Subheading style={styleSheet.headingText}>ENVASE</Subheading>
      </View>
      <View style={styleSheet.container}>
        <View style={styleSheet.container}></View>
        <View style={styleSheet.containerText}>
          <Headline style={styleSheet.containerTextTile}>{title}</Headline>
          <Paragraph>{text}</Paragraph>
        </View>
      </View>
      <View style={styleSheet.bottomContent}>
        <ButtonStepIndicator
          position={step+1}
          steps={maxSteps}
          color={colors.primary}
          iconColor={colors.background}
          fill={colors.onBackground}
          onPress={stepController}
        />
        <View style={styleSheet.bottomAbsoluteContent}>
          <Subheading onPress={() => navigation.navigate(routes.LOGIN)}>
            SKIP
          </Subheading>
        </View>
      </View>
    </LayoutFrame>
  );
};

export default OnBoarding;
