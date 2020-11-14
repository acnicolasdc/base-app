import React, { useState } from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@routes/public";
import FieldInput from "@components/Fields/FieldInput";
import FieldInputPhone from "@components/Fields/FieldInputPhone";
import ButtonCommon from "@components/Buttons/ButtonCommon";
import style from "./SignUp.style";

const SignUp = () => {
  const styleSheet = style();
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <FieldInput label="FIRST NAME / LAST NAME" style={{ marginBottom: 10 }} />
      <FieldInput
        label="EMAIL ID"
        textContentType="emailAddress"
        style={{ marginBottom: 10 }}
      />
      <FieldInputPhone
        label="US / CANADA PHONE"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
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
          onPress={() =>
          navigation.navigate(routes.CODE_VERIFICATION, {
            phoneNumber: phoneNumber,
            pushRoute: routes.RESET_PASSWORD,
          })
        }
        >
          CREATE ACCOUNT
        </ButtonCommon>
      </View>
    </View>
  );
};

export default SignUp;
