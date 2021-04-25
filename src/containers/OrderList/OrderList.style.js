import { StyleSheet } from "react-native";
export default (pallet, colors) =>
    StyleSheet.create({
        text: {
            
            fontSize:30,
            fontWeight:"500",
            color:colors.pallet.grey002
            
        },
        boxText:{
            flex:1,
            alignSelf:'center',
            justifyContent:'center',
        },
        btns:{
            width:100,
            marginHorizontal:5,
        },
        txtTotal: {
            fontSize: 25,
            fontWeight: "600",
            alignSelf:'center',
            fontStyle:'italic',
            marginTop:5
        
          },
          boxTotal:{
              borderTopWidth:1,
              borderColor: "#6739BF",
              marginVertical:10
          }
        
    });
;
