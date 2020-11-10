import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15
    },
    headerContainer: {
      justifyContent: "center",
      alignItems: "flex-start",
    },
    headerContainerTile: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
