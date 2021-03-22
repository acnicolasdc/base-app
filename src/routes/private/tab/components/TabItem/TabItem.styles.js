import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    tabContainer: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    label:{
      color: colors.pallet.white001,
      marginLeft: 10,
      fontSize: 9,
  
      
    }
  });
