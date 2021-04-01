import React from "react";
import { View, Text, Button } from "react-native";

const UnderConstruction = ({ pageName = "Not Found" }) => {
  const defaultMessage = `Estamos trabajando en aprender ingles ${pageName}`;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{defaultMessage}</Text>
    </View>
  );
};

export default UnderConstruction;
