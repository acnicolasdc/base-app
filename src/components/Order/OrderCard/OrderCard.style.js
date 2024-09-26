import { StyleSheet } from "react-native";

export default (colors) =>
  StyleSheet.create({
    container: {
      width: "90%",
      height: 170,
      borderRadius: 30,
      backgroundColor: colors.background,
      marginBottom: "5%",
      flexDirection: "row",
      overflow: "hidden",
      borderStyle: 'solid',
      borderColor: colors.pallet.borderCard,
      borderWidth: 1,
      alignSelf:'center'
    },

    iconContent: {
      justifyContent: "center",
      alignItems: "center",
      flex:1,
      backgroundColor:'transparent',
    },
    informationContent: {
      flex: 2,
      padding:"2%",
      paddingTop:20
    },
    textNumOrder:{
      alignSelf:'flex-end',
      fontStyle:'italic',
      paddingRight:15,
      marginBottom:0,
      paddingBottom:0
      
    },
    textNameClient:{
      color:colors.pallet.grey005,
      fontStyle:'normal',
      fontWeight:"700",
      fontSize:20,
      paddingBottom:3,
    
      
    },
    textItems:{
      color:colors.pallet.textSubtitle,
      fontStyle:'normal',
      //fontWeight:"700",
      fontSize:13,
      paddingBottom:5
      
    }
    ,
    textTotal:{
      color:colors.pallet.textTitle,
      fontStyle:'normal',
      fontWeight:"500",
      fontSize:16
      
    },
   
    contentIndicator:{
      marginVertical:5
    }
  });
