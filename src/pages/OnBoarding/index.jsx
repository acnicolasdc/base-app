import React, { useState } from "react";
import style from "./OnBoarding.styles";
import { routes } from "../../routes/public";
import { View } from "react-native";
import { useTheme, Subheading } from "react-native-paper";
import ButtonStepIndicator from "../../components/Buttons/ButtonStepIndicator";
import LayoutFrame from "../../components/Layouts/LayoutFrame";

const MAX_STEPS = 3;
const OnBoarding = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const { colors } = useTheme();
  const styleSheet = style(colors);
  const stepController = () => {
    if (step === MAX_STEPS) {
      navigation.navigate(routes.LOGIN);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <LayoutFrame>
      <View style={styleSheet.subheading}>
        <Subheading style={styleSheet.headingText}>ENVASE</Subheading>
      </View>
      <View style={styleSheet.container}></View>
      <View style={styleSheet.bottomContent}>
        <ButtonStepIndicator
          key={1}
          percentage={10}
          position={step}
          steps={MAX_STEPS}
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
