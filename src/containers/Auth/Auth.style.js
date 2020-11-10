import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    buttonsContainer: {
      justifyContent:'center',
      alignItems:'center',
      paddingTop: 15,
      flex:1,
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
