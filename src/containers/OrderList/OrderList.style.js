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
           

        }
        
    });
;
