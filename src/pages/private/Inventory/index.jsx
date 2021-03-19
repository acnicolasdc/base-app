import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";

const Inventory = () => {
  const navigation = useNavigation();
  console.log(navigation )
  return (
    <LayoutFrame>
        <Subheading>{`Please enter the phone number associated\nwith this account`}</Subheading>
    </LayoutFrame>
  );
};

export default Inventory;
