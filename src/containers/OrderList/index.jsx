import React, { useContext, useState, useEffect } from "react";
import { OrdersStorageContext } from "@providers/OrdersStorage";
import { FlatList, View, Text } from "react-native";
import { ShoppingCartContext } from "@providers/ShoppingCart";
import OrderCard from "@components/Order/OrderCard";
import orderData from "@data/orders";
import style from "./OrderList.style";
import { useTheme, Dialog, Portal, } from "react-native-paper";
import { Alert } from "react-native";
import ButtonCommon from "@components/Button/ButtonCommon"
import InventoryItem from "@components/Inventory/InventoryItem";

const OrderList = ({ }) => {
  const { pallet, colors } = useTheme();
  const styleSheet = style(pallet, colors);
  const [orderSelected, setOrderSelected] = useState('');
  const [ready, setReady] = useState(true);
  const indexOrder = 0
  const {
    productsOrder
  } = useContext(ShoppingCartContext);
  useEffect(() => {
    setReady(true);
  }, [orderSelected]);

  const {
    orders, updateOrder
  } = useContext(OrdersStorageContext);
  const [visible, setVisible] = useState(false);
  const showDialog = (index) => {
    setOrderSelected(index)
    setVisible(true)
  }
  const hideDialog = () => setVisible(false);

  const handledApproval = () => {
    updateOrder(orderSelected)
    hideDialog(true)
    updateOrder(orderSelected)
  }
  const calcTotal = () => {
    let total = 0;
    Object.values(productsOrder).forEach((product) => {
      total = total + ((product.count) * product.info.price)
    })
    return total;
  }
  const handlerShoppingCartToOrder = () => {
    total: calcTotal()
  }
  handlerShoppingCartToOrder()
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      { orders == 0 ?
        <View style={styleSheet.boxText}>
          <Text style={styleSheet.text}>
            No hay ordenes
          </Text>
        </View> :
        <FlatList
          data={orders}
          renderItem={({ item, index }) => {
            return <OrderCard onPress={() => showDialog(index)
            } info={item}
              style={{ marginLeft: 7, marginTop: 15, marginBottom: 5 }}
            />
          }}
          keyExtractor={orderData.number}
        />
      }
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={{ borderRadius: 30 }}>
          <Dialog.Content style={{ padding: 0 }}>

            {Object.values(productsOrder).length === 0 ? (
              <Text>Carrito vacio</Text>
            ) : (
              <FlatList
                data={Object.values(productsOrder)}
                renderItem={({ item, index }) => (
                  <InventoryItem style={{ height: 83 }}
                    info={{ ...item.info, amount: item.count }} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
            <View style={styleSheet.boxTotal}>
              <Text style={styleSheet.txtTotal}>TOTAL:      ${calcTotal()}</Text>
            </View>
          </Dialog.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <ButtonCommon
              disabled={!ready}
              onPress={() => {
                Alert.alert("Enviando al correo asociado...")
                setReady(false)
              }}
              style={styleSheet.btns}
            >Enviar</ButtonCommon>
            {console.log(orders)}
            <ButtonCommon
              onPress={handledApproval
              }
            >Aprobar</ButtonCommon>
          </View>
          <Dialog.Actions />
        </Dialog>
      </Portal>
    </View>
  );
};

export default OrderList;
