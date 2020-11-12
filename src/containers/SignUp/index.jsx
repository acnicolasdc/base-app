import React from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import FieldInput from "../../components/Fields/FieldInput";
import ButtonCommon from "../../components/Buttons/ButtonCommon";
import style from "./SignUp.style";

const SignUp = () => {
  const styleSheet = style();
  return (
    <View style={{ flex: 1 }}>
      <FieldInput label="FIRST NAME / LAST NAME" style={{ marginBottom: 10 }} />
      <FieldInput
        label="EMAIL ID"
        textContentType="emailAddress"
        style={{ marginBottom: 10 }}
      />
      <FieldInput label="US / CANADA PHONE" />
      <View style={styleSheet.buttonsContainerDivider}>
        <Paragraph style={styleSheet.boldText}>- CREATE A PASSWORD -</Paragraph>
      </View>
      <FieldInput label="PASSWORD" secureTextEntry={true}  style={{ marginBottom: 10 }}/>
      <FieldInput label="CONFIRM PASSWORD" secureTextEntry={true} />
      <View style={styleSheet.bottomContainer}>
        <ButtonCommon
          style={{
            width: "100%",
          }}
        >
          CREATE ACCOUNT
        </ButtonCommon>
      </View>
    </View>
  );
};

export default SignUp;
