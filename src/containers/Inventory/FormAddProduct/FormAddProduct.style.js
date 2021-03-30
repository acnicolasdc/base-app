import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: "5%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    boldText: {
      fontWeight: "bold",
    },
    bottomContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: "10%"
    },
  });
