import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    container: {
      height: 80,
      backgroundColor:colors.background,
      flexDirection: "row",
   
    },
    iconContent: {
      alignSelf:'center',
    },
    informationContent: {
      flex:'row',
      flex: 3,
      paddingTop:12,
      paddingLeft:12,
      paddingRight:5
    },
    textAmount:{
      color:colors.pallet.textSubtitle,
      fontStyle:'italic',
      paddingLeft:5,
      fontSize:12
    }
    ,
    textDate:{
      color:colors.pallet.textSubtitle,
      fontStyle:'italic',
      paddingRight:5,
      fontSize:10
    },
    textNameItem:{
      color:colors.pallet.textTitle,
      fontWeight:"500",
      fontSize:16
    },
    textPrice:{
      color:colors.pallet.textTitle,
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
