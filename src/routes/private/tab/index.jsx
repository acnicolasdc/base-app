import * as React from "react";
import { useTheme } from "react-native-paper";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MockPage from "@pages/UnderConstruction";
import TabItem from "./components/TabItem";

const Tab = createBottomTabNavigator();

export const routes = Object.freeze({
  LOAD: "load",
  DOCUMENT: "document",
  CHAT: "chat",
});

const sizeFocused = (focused, size) => {
  return focused?size:size*1.2;
}

const TabNavigation = () => {
  const { colors, dark } = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          borderTopWidth: 0,
          backgroundColor: colors.background,
          height: 100,
          paddingHorizontal: 20,
        },
        activeTintColor: colors.pallet.white001,
        inactiveTintColor: dark ? colors.pallet.grey001 : colors.pallet.grey003,
        labelStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen
        name={routes.DOCUMENT}
        component={(props) => (
          <MockPage {...props} pageName={routes.DOCUMENT} />
        )}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabItem title="DOCUMENT" focused={focused}>
              <MaterialCommunityIcons name="text" size={sizeFocused(focused, size)} color={color} />
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name={routes.LOAD}
        component={(props) => <MockPage {...props} pageName={routes.LOAD} />}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabItem title="LOAD" focused={focused}>
              <SimpleLineIcons name="handbag" size={sizeFocused(focused, size)} color={color} />
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name={routes.CHAT}
        component={(props) => <MockPage {...props} pageName={routes.CHAT} />}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabItem title="CHAT" focused={focused}>
              <MaterialCommunityIcons
                name="message-text-outline"
                size={sizeFocused(focused, size)}
                color={color}
              />
            </TabItem>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
