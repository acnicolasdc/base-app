import React, { useLayoutEffect } from "react";
import { useTheme, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const defaultParams = Object.freeze({
  title: "",
  height: 100,
  rightText: "",
  rightNavigation: "",
});

const useShoppingCart = (params = defaultParams) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { height, rightText, title, rightNavigation } = params;
  useLayoutEffect(() => {
    navigation.setOptions({
    //   title: title,

    //   headerStyle: {
    //     shadowRadius: 0,
    //     shadowOffset: {
    //       height: 0,
    //     },
    //     backgroundColor: colors.background,
    //     height: height,
    //   },
      headerRight: () => (
        <Subheading onPress={() => navigation.navigate(rightNavigation)}>
          {rightText}
        </Subheading>
      ),
    //   headerLeftContainerStyle: { marginLeft: 20, height: "100%" },
    //   headerRightContainerStyle: { marginRight: 20, height: "100%" },
    });
  }, [navigation]);
};

export default useShoppingCart;
