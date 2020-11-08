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
      paddingVertical: 25,
    },
    container: {
      flex: 1,
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
