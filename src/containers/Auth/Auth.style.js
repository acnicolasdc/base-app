import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    buttonsContainer: {
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 15,
      flex: 1,
    },
    buttonsContainerDivider: {
      paddingVertical: 15,
    },
    boldText: {
      fontWeight: "bold",
    },
    rememberContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      paddingVertical: 10,
      flex: 0.3,
    },
  });
