import React, { useState } from "react";
import ButtonStepIndicator from '../../components/ButtonStepIndicator';
import { View } from "react-native";
const MAX_STEPS = 3;
const OnBoarding = () => {
    const [ step, setStep ] = useState(0)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ButtonStepIndicator key={1} percentage={10} position={step} steps={MAX_STEPS} onPress={()=>{
          if(step === MAX_STEPS) setStep(0);
          setStep((prevStep)=>prevStep+1);
      }}/>
    </View>
  );
};

export default OnBoarding;
