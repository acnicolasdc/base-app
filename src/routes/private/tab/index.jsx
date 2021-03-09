import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "@pages/private/Products";
import MockPage from "@pages/UnderConstruction";
import { AuthorizationsContext } from "@providers/Authorizations";
import TabItem from "./components/TabItem";
import style from "./Tab.styles";

const Tab = createBottomTabNavigator();

export const routes = Object.freeze({
  ORDERS: "tab_orders",
  PRODUCTS: "tab_products",
  INVENTORY: "tab_inventory",
});

const sizeFocused = (focused, size) => {
  const multiSize = 1.2;
  return focused?size:size*multiSize;
}

const TabNavigation = () => {
  const { hasInventoryPermission } = useContext(AuthorizationsContext);
  const { colors, dark } = useTheme();
  const styleSheet = style(colors, dark);
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styleSheet.style,
        activeTintColor: colors.pallet.white001,
        inactiveTintColor: dark ? colors.pallet.grey001 : colors.pallet.grey003,
        labelStyle: styleSheet.labelStyle,
      }}
    >
      <Tab.Screen
        name={routes.ORDERS}
        component={(props) => (
          <MockPage {...props} pageName={routes.ORDERS} />
        )}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabItem title="ORDENES" focused={focused}>
              <MaterialCommunityIcons name="text" size={sizeFocused(focused, size)} color={color} />
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name={routes.PRODUCTS}
        component={Products}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabItem title="PRODUCTOS" focused={focused}>
              <SimpleLineIcons name="handbag" size={sizeFocused(focused, size)} color={color} />
            </TabItem>
          ),
        }}
      />
      {hasInventoryPermission()&&<Tab.Screen
        name={routes.INVENTORY}
        component={(props) => <MockPage {...props} pageName={routes.INVENTORY} />}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabItem title="INVENTARIO" focused={focused}>
              <MaterialCommunityIcons
                name="message-text-outline"
                size={sizeFocused(focused, size)}
                color={color}
              />
            </TabItem>
          ),
        }}
      />}
    </Tab.Navigator>
  );
};

export default TabNavigation;
