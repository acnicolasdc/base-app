import { StyleSheet } from "react-native";
export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#ECEBEC"
    },
    containerImg: {
    paddingTop:15,
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor:'red'
    },
    infomationContent: {
      marginTop: "5%",
      // backgroundColor:'green'
    },
    fieldInput: {
      width: "80%",
      paddingTop: "2%",
      alignSelf: 'center',
      backgroundColor:"#ECEBEC"

    },
    textTitleForm: {
      fontSize: 20,
      fontWeight: "500"
    },
    textSubtitleForm: {
      fontSize: 15,
      fontWeight: "300",
      alignSelf: 'center',
      paddingTop:5
    },
    buttonsWrapContent: {
      paddingTop: 15,
  
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buttons: {
      width: "45%",
      height: 45,
      
    },
    buttonsText: {
      fontSize:15,
      color:'white',
      alignSelf:'center',
      justifyContent:'center',
      marginTop:15
    },
    contentProducts:{
      flexDirection:'row',
      paddingLeft:35,
      width:"100%"
       }
       ,
       fieldInputProducts:{
      flexDirection:'row',
      paddingLeft:35,
      width:"70%",
      backgroundColor:"#ECEBEC"
       }
  });
;
