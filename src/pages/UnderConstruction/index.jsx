import React from "react";
import { View, Text } from "react-native";

const UnderConstruction = ({ pageName = "Not Found" }) => {
  const defaultMessage = `Estamos trabajando en aprender ingles ${pageName}`;
  return (
    <View>
      <Text>{defaultMessage}</Text>
    </View>
  );
};

export default UnderConstruction;
