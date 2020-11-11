import { StyleSheet } from "react-native";

export default (colors, cellSize) =>
  StyleSheet.create({
    cell: {
      width: cellSize,
      height: cellSize,
      margin: 5,
      lineHeight: cellSize - 2,
      fontSize: cellSize / 2,
      textAlign: "center",
      borderRadius: cellSize/4,
      backgroundColor: colors.pallet.purple002,
      overflow: "hidden",
    },
    focusCell: {
      borderColor: colors.primary,
    },
  });
