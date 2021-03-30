import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: colors.pallet.borderCard,
        borderWidth: 1,
        borderRadius:30
    }
  });
