import React, { useLayoutEffect } from "react";
import { useTheme, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ButtonArrow from "@components/Buttons/ButtonArrow";

export const defaultParams = Object.freeze({
  title: "",
  height: 110,
  rightText: '',
  rightNavigation:'',
});

const useHeader = (params = defaultParams ) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const {height, rightText, title, rightNavigation} = params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerStyle: {
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        backgroundColor: colors.background,
        height: height,
      },
      headerLeft: ButtonArrow,
      headerRight:() => (rightText&&rightNavigation)?<Subheading onPress={()=> navigation.navigate(rightNavigation)}>{rightText}</Subheading>:null,
      headerLeftContainerStyle: { marginLeft: 20, height:'100%'},
      headerRightContainerStyle: { marginRight: 20, height:'100%'},
    });
  }, [navigation]);
};

export default useHeader;