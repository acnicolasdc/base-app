import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ButtonCommon from "@components/Button/ButtonCommon";
import ButtonArrow from "@components/Button/ButtonArrow";
import { useNavigation } from "@react-navigation/native";
import { Portal } from "react-native-paper";

const ScanBarcode = ({ open = false, goBack = () => { }, getData = () => { }, }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    getData({ type, data })
    goBack();
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
          onPress={goBack}
          style={{ marginBottom: 15 }}
        />
        <Text style={{
          fontSize:15,
          fontStyle:'italic',
          color:'white',
          alignSelf:'center',
          justifyContent:'center',
          position:'relative',
          top:110
         }}>
         BUSCANDO CODIGO DE BARRAS...
        
      </Text>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            marginTop: 120,
            marginBottom:150,
            borderColor:'#5e5e5e'
          }}
        ></View>
        {scanned && (
          <ButtonCommon
            style={{ width: 100 }}
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </Portal>
  ) : null;
};

export default ScanBarcode;
