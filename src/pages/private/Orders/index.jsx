import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame, { themeLayoutFrame } from "@components/Layouts/LayoutFrame";

const Orders = () => {
  const navigation = useNavigation();
  console.log(navigation )
  return (
    <LayoutFrame themeLayout={themeLayoutFrame.GRAY_AND_DARK}>
        <Subheading>{`Please enter the phone number associated\nwith this account`}</Subheading>
    </LayoutFrame>
  );
};

export default Orders;
