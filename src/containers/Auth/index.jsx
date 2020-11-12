import React, { useState } from "react";
import { routes } from "../../routes/public";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableHighlight } from "react-native";
import { Paragraph } from "react-native-paper";
import FieldInput from "../../components/Fields/FieldInput";
import ButtonCommon from "../../components/Buttons/ButtonCommon";
import ButtonSwitch from "../../components/Buttons/ButtonSwitch";
import IconFaceID from "../../components/Icons/IconFaceID";
import style from "./Auth.style";

const Auth = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(false);
  const styleSheet = style();
  return (
    <View style={{flex:1}}>
      <FieldInput label="COMPANY ID" style={{ marginBottom: 10 }} />
      <FieldInput
        label="USERNAME / EMAIL"
        textContentType="emailAddress"
        style={{ marginBottom: 10 }}
      />
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
            <Paragraph style={styleSheet.faceIDText}>
              LOGIN VIA FACE ID
            </Paragraph>
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
          onPress={() =>
          navigation.navigate(routes.SING_UP)
        }
        >
          DON'T HAVE AN ACCOUNT YET.
        </ButtonCommon>
      </View>
    </View>
  );
};

export default Auth;
