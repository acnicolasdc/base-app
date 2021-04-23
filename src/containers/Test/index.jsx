import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ButtonCommon from "@components/Button/ButtonCommon";
import ButtonArrow from "@components/Button/ButtonArrow";
import { useNavigation } from "@react-navigation/native";
import { Portal } from "react-native-paper";
const ScanBarcode = ({ open = false, goBack = () => {}, getData = () => {},}) => {
  // const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    getData({type, data})
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return open ? (
    <Portal>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ flex: 1, paddingVertical: 60, paddingHorizontal: 20 }}>
        <ButtonArrow
          title={"Tap to Scan Again"}
          onPress={goBack}
          style={{ marginBottom: 15 }}
        />
        <View
          style={{
            flex: 1,
            paddingVertical: 30,
            paddingHorizontal: 20,
            borderWidth: 1,
            marginVertical: 15,
          }}
        ></View>
        {scanned && (
          <ButtonCommon
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </Portal>
  ) : null;
};

export default ScanBarcode;
