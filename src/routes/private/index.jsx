import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './stack';
import TabNavigation from './tab';

const Stack = createStackNavigator();

const Private = () => {
  return (
      <Stack.Navigator initialRouteName="GeneralTab">
        <Stack.Screen name="GeneralTab" component={TabNavigation} />
        <Stack.Screen name="GeneralStack" component={StackNavigation} />
      </Stack.Navigator>
  );
};

export default Private;
