import { StyleSheet } from "react-native";

export default (pallet, colors) =>
    StyleSheet.create({
        container: {
            flexDirection: 'column',
            borderColor: colors.pallet.borderCard,
            borderRadius: 15,
            marginHorizontal: 20,
            borderWidth: 1,
            marginVertical: 40,
            padding: 15,
        },
        textTile: {
            marginVertical: 10,
            fontSize: 20,
            alignSelf: 'center',
            fontWeight: '500',
            fontStyle: 'normal',
            color: colors.pallet.grey004
        },
        btnContainer: {
            width: "70%",
            alignSelf: 'center',
            paddingBottom: 15,
            justifyContent: 'flex-end',
            marginTop: 50
        },
        fieldInput: {
            marginBottom: 3
        },
        boxScan: {
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'center',
        },
        boxIcon: {
            backgroundColor: '#6739BF',
            borderRadius: 10,
            width: 45,
            height: 45,
            justifyContent: 'center',
            marginHorizontal: 15,
            alignItems: 'center', shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        },
        txtScan: {
            fontSize: 15,
            color: colors.pallet.grey002,
            borderColor: colors.pallet.borderCard,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            height:45,
            width:220
        }

    });



