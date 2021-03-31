import { StyleSheet } from "react-native";

export default () =>
    StyleSheet.create({
        container: {
            backgroundColor: 'red',
            flexDirection: 'column',
            height: "100%",
            justifyContent: 'space-between'
        },
        textTile: {
            marginTop: 20,
            fontSize: 25,
            alignSelf: 'center',
            fontWeight: '500',
            fontStyle: 'normal'
        },
        textSubtile: {
            fontSize: 15,
            alignSelf: 'center',
            paddingTop: 10

        },
        contentInformation: {
            paddingHorizontal: 20,
        },

        btnContainer: {
            width: "70%",
            alignSelf: 'center',
            paddingBottom: 15
        }
    });



