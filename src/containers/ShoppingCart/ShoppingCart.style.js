import { StyleSheet } from "react-native";
export default () =>
  StyleSheet.create({
    container: {
      flex:1,
      flexDirection: "column",
      backgroundColor:'white'
    },
    contentImg: {
      paddingTop: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    textNumOrder:{
      fontStyle:'italic',
      fontSize:15,
      fontWeight:"300",
      paddingTop:5
    },

    infomationContent: {
      marginTop: "1%",
      // backgroundColor:'green'
    },
    fieldInput: {
      width: "80%",
      paddingTop: "2%",
      alignSelf: 'center',

    },
    textTitleForm: {
      fontSize: 20,
      fontWeight: "500"
    },
    textSubtitleForm: {
      fontSize: 25,
      fontWeight: "500",
      alignSelf: 'center',
      paddingTop: 5
    },
    contentTotal: {
      paddingTop:40,
      paddingHorizontal:15,
      flexDirection: "row",
      justifyContent: 'space-between'

    },
    txtTotal: {
      fontSize: 25,
      fontWeight: "600",
    },
    
    txtSeparatorProducts: {
      fontSize: 22,
      fontWeight: "600",
      alignSelf:'center',
      paddingTop:30,
      paddingBottom:15
    
    },

    btnGenerateOrder: {
      width: "70%",
      alignSelf: 'center',
      marginBottom: 40,
      marginTop: 30


    },
    textButton: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 15
    },
    contentProducts: {
      flexDirection: 'column',
      paddingLeft:15,
    },
    fieldInputProducts: {
      width: "70%",
    },

  });
;
