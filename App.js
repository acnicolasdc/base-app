import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "@routes";
import Theme from "@providers/Theme";
import ShoppingCart from "@providers/ShoppingCart";
import OrdersStorage from "@providers/OrdersStorage";
import Authorizations from "@providers/Authorizations";

export default function App() {
  return (
    <SafeAreaProvider>
      <Theme>
        <Authorizations>
          <ShoppingCart>
            <OrdersStorage>
              <Routes />
            </OrdersStorage>
          </ShoppingCart>
        </Authorizations>
      </Theme>
    </SafeAreaProvider>
  );
}
