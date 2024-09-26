import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { routes, subRoutes } from "@routes/private";
import styles from "./ShoppingCart.style";
import { View, FlatList, Alert } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import FieldInput from "@components/Field/FieldInput";
import ButtonCommon from "@components/Button/ButtonCommon";
import InventoryItem from "@components/Inventory/InventoryItem";
import { ShoppingCartContext } from "@providers/ShoppingCart";
import { OrdersStorageContext } from "@providers/OrdersStorage";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ShoppingCart = () => {
  const { pallet, colors } = useTheme();
  const styleSheet = styles(pallet, colors);
  const navigation = useNavigation();
  const {
    products,
    cleanShoppingCart,
    deleteItemById
  } = useContext(ShoppingCartContext);
  const {
    orders, addOrder
  } = useContext(OrdersStorageContext);
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    isFormComplete();
  }, [name, id, phone, email, products]);
  const isFormComplete = () => {
    let isReady = false;
    if (name === "") isReady = true;
    if (id === "") isReady = true;
    if (phone === "") isReady = true;
    if (email === "") isReady = true;
    if (Object.values(products).length === 0) isReady = true;
    setReady(isReady);
  };
  const calcTotal = () => {
    let total = 0;
    Object.values(products).forEach((product) => {
      total = total + (product.count * product.info.price)
    })
    return total;
  }

  const handleRemoveProduct = (index) => {
    deleteItemById(index)
  }
  const handlerShoppingCartToOrder = () => {
    const costumer = {
      name: name,
      id: id,
      phone: phone,
      email: email,
      total: calcTotal()
    };

  

    addOrder(costumer, Object.values(products));
    cleanShoppingCart()
    navigation.navigate(routes.GENERAL_TAB, {
      screen: subRoutes.GENERAL_TAB.ORDERS,
    })
  };


  return (

    <KeyboardAwareScrollView >
      <View style={styleSheet.infomationContent, styleSheet.container}>
        <Text style={styleSheet.textSubtitleForm}>INGRESAR DATOS</Text>

        <FieldInput
          label="NOMBRE DE CLIENTE"
          style={styleSheet.fieldInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <FieldInput
          label="NUMERO DE IDENTIFICACION"
          style={styleSheet.fieldInput}
          keyboardType="number-pad"
          onChangeText={(text) => setId(text)}
          value={id}
        />
        <FieldInput
          label="CELULAR"
          style={styleSheet.fieldInput}
          keyboardType="number-pad"
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
        <FieldInput
          label="CORREO ELECTRONICO"
          style={styleSheet.fieldInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styleSheet.txtSeparatorProducts}>PRODUCTOS</Text>

        <View style={styleSheet.contentProducts}>
          {Object.values(products).length === 0 ? (
            <Text style={styleSheet.txtTotal}>Carrito vacio</Text>
          ) : (
            <FlatList
              data={Object.values(products)}
              renderItem={({ item, index }) => (
                <InventoryItem
                  onPress={() => Alert.alert(
                    "CUIDADO !",
                    "Estas seguro que deseas eliminar este producto?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => { null },
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => handleRemoveProduct(item.id) }
                    ]
                  )
                  }


                  info={{ ...item.info, amount: item.count }} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>

        {Object.values(products).length !== 0 && <View style={styleSheet.contentTotal}>
          <Text style={styleSheet.txtTotal}>TOTAL</Text>
          <Text style={styleSheet.txtTotal}>${calcTotal()}</Text>
        </View>}

        <View style={styleSheet.btnGenerateOrder}>
          <ButtonCommon disabled={ready} onPress={handlerShoppingCartToOrder}>
            Generar Orden
  </ButtonCommon>
        </View>
      </View>

    </KeyboardAwareScrollView>

  );
};

export default ShoppingCart;
