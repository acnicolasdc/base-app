import { StyleSheet } from "react-native";
const sizeCount = 30;
export default (pallet, colors) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            borderRadius: 15,
            borderWidth: .7,
            borderColor: colors.pallet.grey002,
            width: 100,
            height: 40,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 3,
            margin: 1

        },
        boxes: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        boxCount: {
            minWidth: 28,

        },
        boxButton: {
            backgroundColor: colors.pallet.purple004,
            borderRadius: 15,
            height: 28,
            width: 28,
            marginHorizontal: 3,
        },
        text: {
            alignSelf: 'center',
            paddingTop: 3,
            fontWeight: "500",
            fontSize: 15,
        },

    });
