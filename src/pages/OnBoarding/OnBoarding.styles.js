import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    headingText: {
      letterSpacing: 8,
      color: `${colors.secondary}`,
    },
    subheading: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
    },
    container: {
      flex: 1,
    },
    containerText: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    containerTextTile: {
      color: `${colors.secondary}`,
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
    bottomContent: {
      justifyContent: "center",
      alignItems: "center",
    },
    bottomAbsoluteContent: {
      position: "absolute",
      right: 25,
    },
  });
