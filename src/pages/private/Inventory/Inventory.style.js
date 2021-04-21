import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    boxButton: {

      alignSelf: 'center',
      position: 'absolute',
      top: '85%',
      left: '30%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    btnNew: {
      margin: 0,
      paddingVertical: 0
    },
    txtBtn: {
      fontSize: 12
    }
  });
