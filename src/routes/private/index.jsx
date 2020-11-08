import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './stack';
import TabNavigation from './tab';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  GENERAL_TAB: 'GeneralTab',
  GENERAL_STACK: 'GeneralStack',
});

const Private = () => {
  return (
      <Stack.Navigator initialRouteName={routes.GENERAL_TAB}>
        <Stack.Screen name={routes.GENERAL_TAB} component={TabNavigation} />
        <Stack.Screen name={routes.GENERAL_STACK} component={StackNavigation} />
      </Stack.Navigator>
  );
};

export default Private;
