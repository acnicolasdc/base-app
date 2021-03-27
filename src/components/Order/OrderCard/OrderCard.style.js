import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    container: {
      width: "97%",
      height: 130,
      borderRadius: 10,
      backgroundColor: colors.background001,
      shadowColor: colors.pallet.black001,
      marginBottom: "5%",
      shadowOffset: {
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: "row",
      overflow: "hidden",

    },
    iconContent: {
      flex: 1,
      backgroundColor: (255, 255, 255, 0.54),
      justifyContent: "center",
      alignItems: "center",
    },
    informationContent: {
      flex: 2,
      backgroundColor: "#424242",
      padding:"2%"
    },
    textTitle:{
      color:"#F5F3FB"
    }
  });
