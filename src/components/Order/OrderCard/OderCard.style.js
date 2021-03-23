import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 130,
      borderRadius: 10,
      backgroundColor: colors.background001,
      shadowColor: colors.pallet.black001,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: "row",
      overflow: "hidden",
    },
    iconContent: {
      flex: 1,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
    },
    informationContent: {
      flex: 2,
      backgroundColor: "blue",
    },
  });
