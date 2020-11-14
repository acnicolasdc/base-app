import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    customFrame: {
      backgroundColor: colors.pallet.purple003,
    },
    headingText: {
      letterSpacing: 8,
      color: colors.pallet.white001,
    },
    subheading: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
    },
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    containerImage: {
      width: "65%",
      height: "50%",
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: "contain",
    },
    containerText: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 20,
      width: "100%",
    },
    containerTextTile: {
      color: colors.pallet.white001,
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
    bottomContentButton: {
      width: "80%",
      backgroundColor: colors.secondary,
    },
  });
