import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    buttonsContainerDivider: {
      paddingVertical: 30,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    boldText: {
      fontWeight: 'bold'
    },
    bottomContainer: {
      flex: 1,
      justifyContent:'flex-end',
      alignItems:'center',
    },
  });
