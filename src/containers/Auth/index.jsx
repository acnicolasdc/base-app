import React, { useState } from "react";
import { View, TouchableHighlight } from "react-native";
import { Paragraph } from "react-native-paper";
import FieldInput from "../../components/Fields/FieldInput";
import ButtonCommon from "../../components/Buttons/ButtonCommon";
import ButtonSwitch from "../../components/Buttons/ButtonSwitch";
import IconFaceID from "../../components/Icons/IconFaceID";
import style from "./Auth.style";

const Auth = () => {
  const styleSheet = style();
  const [state, setState] = useState(false);
  return (
    <View>
      <FieldInput label="COMPANY ID" />
      <FieldInput label="USERNAME / EMAIL" textContentType="emailAddress" />
      <FieldInput label="PASSWORD" secureTextEntry={true} />
      <View style={styleSheet.buttonsContainer}>
        <View style={styleSheet.rememberContainer}>
          <Paragraph style={styleSheet.boldText}>
            Remember me next time
          </Paragraph>
          <ButtonSwitch
            onPress={() => setState((prevState) => !prevState)}
            isToggle={state}
          />
        </View>
        <TouchableHighlight
          style={styleSheet.buttonsContainer}
          activeOpacity={1}
          underlayColor="transparent"
        >
          <>
            <IconFaceID />
            <Paragraph>LOGIN VIA FACE ID</Paragraph>
          </>
        </TouchableHighlight>
        <ButtonCommon
          style={{
            width: "100%",
          }}
        >
          LOGIN
        </ButtonCommon>
        <View style={styleSheet.buttonsContainerDivider}>
          <Paragraph style={styleSheet.boldText}>- OR -</Paragraph>
        </View>
        <ButtonCommon
          mode="outlined"
          style={{
            width: "80%",
          }}
        >
          DON'T HAVE AN ACCOUNT YET.
        </ButtonCommon>
      </View>
    </View>
  );
};

export default Auth;
