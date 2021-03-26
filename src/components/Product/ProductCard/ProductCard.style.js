import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
      width: "48%",
      height: 120,
      borderRadius: 10,
      backgroundColor: "#f1c40f",
      marginBottom: "5%",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
