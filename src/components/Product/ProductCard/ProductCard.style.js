import { StyleSheet } from "react-native";

export default (pallet, colors) =>
  StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderColor: colors.pallet.borderCard,
      borderWidth: 1,
      flexDirection: 'column',
      minHeight: 230,
      borderRadius: 30,
      backgroundColor: colors.background,
      marginBottom: 10,
      paddingHorizontal: 5,
      paddingTop: 15,

      flex: 1
    },
    containerSelected: {
      borderColor: colors.pallet.green001,
    },
    containerUnelected: {
      borderColor: colors.pallet.borderCard,
    },
    containerUnSelected: {
      borderColor: colors.pallet.purple004,
    },
    itemInvisible: {
      backgroundColor: 'transparent'
    },
    iconContent: {
      backgroundColor: colors.pallet.backgroundWrapIcon,
      width: 80,
      height: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      margin: 15
    },
    textContent: {
      paddingLeft: 15,
      paddingTop: 25,
    },
    textNameProduct: {
      fontSize: 15,
      alignSelf: "flex-start",
      paddingTop: 5,
      color: colors.textTitle,
      fontWeight: "500"
    },
    textAmountProduct: {
      fontSize: 12,
      color: colors.textSubtitle,
      fontStyle: 'italic',
      alignSelf: "flex-start",
      fontWeight: "300"
    },
    textPriceProduct: {
      fontSize: 15,
      color: colors.textTitle,
      fontStyle: 'normal',
      paddingTop: 12,
      fontWeight: "500"
    },
    btnCount: {
      alignSelf: 'center',
      justifyContent: 'flex-end',
      paddingVertical: 10,

    },
    contentProductName: {
      minHeight: 75,
    },
    soldOut: {
      backgroundColor: colors.pallet.purple004,
      width: 120,
      borderRadius: 10,
      alignItems: 'center',
      height: 40,
    },
    textSoldOut: {
      color: 'white',
      fontSize: 15,
      fontStyle: 'normal',
      paddingTop: 12,
      fontWeight: "500"
    }
  });
