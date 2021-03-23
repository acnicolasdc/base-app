import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Subheading } from "react-native-paper";
import LayoutFrame from "@components/Layout/LayoutFrame";

const Inventory = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <LayoutFrame>
      <Subheading>{`Modulo visible solo para el admin.\nAqui podra modificar el stock y sus parametros`}</Subheading>
    </LayoutFrame>
  );
};

export default Inventory;
