import { StyleSheet } from "react-native"; 
export default (colors) =>
    StyleSheet.create({
        container: {
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderRadius: 15,
            backgroundColor: colors.pallet.backgroundWrapIcon,
            alignSelf:'center',
            
        }
    })