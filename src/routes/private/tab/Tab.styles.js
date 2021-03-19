import { StyleSheet } from "react-native";

export default (colors, dark) =>
  StyleSheet.create({
    style: {
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      borderTopWidth: 0,
      backgroundColor: colors.tab,
      height: 100,
      paddingHorizontal: 20,
    },
    labelStyle: {
      display: "none",
    },
  });
