import React from "react";
import { View, Text, Button } from "react-native";

const UnderConstruction = ({
  pageName = "Not Found",
  stack = null,
  screen = '',
  navigation,
}) => {
  const defaultMessage = `Estamos trabajando en aprender ingles ${pageName}`;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{defaultMessage}</Text>
      {screen&&<Button
        title="GO"
        onPress={() =>
          stack
            ? navigation.navigate(stack, { screen: screen })
            : navigation.navigate(screen)
        }
      />}
    </View>
  );
};

export default UnderConstruction;
