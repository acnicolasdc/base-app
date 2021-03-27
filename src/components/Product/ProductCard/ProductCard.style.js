import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
  
     
      height: 120,
      borderRadius: 10,
      backgroundColor: "#424242",
      marginBottom: "5%",
      shadowOffset: {
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 5,
      padding:"2%"
    },
    textTitle:{
      color:"#F5F3FB"
    },
    itemInvisible:{
      backgroundColor:'transparent'
    }
  });
