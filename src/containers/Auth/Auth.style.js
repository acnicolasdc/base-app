import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    buttonsContainer: {
      justifyContent:'center',
      alignItems:'center',
      paddingVertical: 15,
    },
    buttonsContainerDivider: {
      paddingVertical: 15,
    },
    boldText: {
      fontWeight: 'bold'
    },
    faceIDText: {
      marginTop: 15
    },
    rememberContainer: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      paddingVertical: 10,
    },
  });
