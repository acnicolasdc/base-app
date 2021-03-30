import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    container: {
    
      width: "97%",
      height: 70,
      borderRadius: 80,
      backgroundColor:colors.background,
      flexDirection: "row",
      overflow: "hidden",
    },
    iconContent: {
      paddingLeft:20,
      alignSelf:'center',
    
      

    },
    informationContent: {
      flex:'row',
      flex: 2.4,
      paddingTop:12,
      paddingLeft:20
    },
    textAmount:{
      color:"#5e5e5e",
      fontStyle:'italic',
      paddingLeft:5,
      fontSize:12
    }
    ,
    textDate:{
      color:"#5e5e5e",
      fontStyle:'italic',
      paddingLeft:5,
      fontSize:10
    },
    textNameItem:{
      color:"#424242",
      fontWeight:"500",
      fontSize:16
    },
    textPrice:{
      color:"#6739BF",
      fontWeight:"500",
      fontStyle:'italic',
      fontSize:14
    }
    ,
    wrapTextPrice:{
    width:75,
    alignSelf:'center'
    }
    
  });
