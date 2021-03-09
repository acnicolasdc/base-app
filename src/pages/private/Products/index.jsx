import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layouts/LayoutFrame";

const Products = () => {
  const navigation = useNavigation();
  console.log(navigation )
  return (
    <LayoutFrame>
        <Subheading>{`Please enter the phone number associated\nwith this account`}</Subheading>
    </LayoutFrame>
  );
};

export default Products;
