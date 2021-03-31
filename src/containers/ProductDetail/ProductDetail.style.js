import { StyleSheet } from "react-native";
export default () =>
  StyleSheet.create({
    container: {
      padding:20,
      flex: 1,
      flexDirection: "column",
      backgroundColor: "red",

    },
    contentImg: {
    
      justifyContent:'center'
    },
    contentNameProduct: {
      fontSize:30,
      paddingVertical:20,
    },
    textNameProduct: {
      fontSize:30,
      fontWeight:"600"
    },
    textAmountStock: {
      fontSize:15
      },
    contentSeparator: {
      
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10
    },
    contentAmount: {
    
    },
    textAmount: {
    fontSize:25
    },
    contentPrice: {
      
    },
    textPrice: {
      fontSize:30,
      
      },
    contentDescription: {
    
    },
    titleDescription: {
      fontSize:15,
      fontWeight:"600"
    },
    textDescription: {
      fontSize:15
    },
  });
;