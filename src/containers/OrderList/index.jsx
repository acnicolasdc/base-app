import React, { useContext, useState } from "react";
import { OrdersStorageContext } from "@providers/OrdersStorage";
import { FlatList, View, Text } from "react-native";
import OrderCard from "@components/Order/OrderCard";
import orderData from "@data/orders";
import style from "./OrderList.style";
import { useTheme, Button, Paragraph, Dialog, Portal } from "react-native-paper";
import ButtonCommon from "@components/Button/ButtonCommon"
import { Feather } from '@expo/vector-icons';

const OrderList = ({ }) => {
  const { pallet, colors } = useTheme();
  const styleSheet = style(pallet, colors);
  const [orderSelected, setOrderSelected] = useState('');

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
              style={{ marginLeft: 7, marginTop: 15 }}

            />
          }}
          keyExtractor={orderData.number}
        />
      }
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title><Feather name="x" size={24} color="black" /></Dialog.Title>
          <Dialog.Content style={{}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ButtonCommon
                onPress={handledApproval}
                >Rechazar</ButtonCommon>

              <ButtonCommon
               onPress={handledApproval}
                >Aprobar</ButtonCommon>

            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default OrderList;
