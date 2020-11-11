import { StyleSheet } from "react-native";

export default (colors, windowWidth) =>
  StyleSheet.create({
    formContainer: {
      flex:1,
    },
    centerContent:{
      justifyContent:'center',
      alignItems:'center'
    },
    verificationContainer:{
      width: windowWidth,
      padding:25,
      backgroundColor: colors.background,
      borderRadius: 25
    },
    rootCodeComponent:{
      marginVertical: 20,
    },
    timeTextIndicator:{
      color: colors.primary,
    },
    timeIndicatorContainer:{
      flexDirection: 'row',
      alignItems:'center'
    },
    timeIconIndicator:{
      color: colors.primary,
      marginRight: 5
    }
  });
